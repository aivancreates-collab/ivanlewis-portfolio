import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Helper to extract clean keys from input/URLs
const cleanKey = (key: string) => {
  if (!key) return '';
  let cleaned = key.trim().replace(/^['"]|['"]$/g, '');
  if (cleaned.includes('formspree.io/f/')) {
    const parts = cleaned.split('formspree.io/f/');
    if (parts[1]) cleaned = parts[1].split('?')[0].split('#')[0].trim();
  } else if (cleaned.includes('formspree.io/')) {
    const parts = cleaned.split('formspree.io/');
    if (parts[1]) cleaned = parts[1].split('?')[0].split('#')[0].trim();
  }
  return cleaned;
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // API Config Status Route (safe to call from browser, reports presence without leaking keys)
  app.get("/api/config-status", (req, res) => {
    const web3FormsKey = cleanKey(process.env.VITE_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY || "");
    const formspreeId = cleanKey(process.env.VITE_FORMSPREE_ENDPOINT_ID || process.env.FORMSPREE_ENDPOINT_ID || process.env.FORMSPREE_ID || process.env.VITE_FORMSPREE_ID || "");
    
    res.json({
      hasWeb3Forms: !!web3FormsKey,
      hasFormspree: !!formspreeId,
    });
  });

  // API Submit Route
  app.post("/api/submit-contact", async (req, res) => {
    try {
      const { name, email, track, brief } = req.body;

      if (!name || !email || !brief) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }

      const web3FormsKey = cleanKey(process.env.VITE_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY || "");
      const formspreeId = cleanKey(process.env.VITE_FORMSPREE_ENDPOINT_ID || process.env.FORMSPREE_ENDPOINT_ID || process.env.FORMSPREE_ID || process.env.VITE_FORMSPREE_ID || "");

      console.log("[SERVER] Contact submission received:", { name, email, track });
      console.log("[SERVER] Key presence status:", { 
        hasWeb3Forms: !!web3FormsKey, 
        hasFormspree: !!formspreeId 
      });

      if (!web3FormsKey && !formspreeId) {
        console.log("[SERVER] No credentials configured. Simulating successful submission.");
        return res.json({ success: true, simulation: true });
      }

      if (formspreeId) {
        console.log(`[SERVER] Dispatching to Formspree: ${formspreeId}`);
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            track,
            message: brief,
            _subject: `Portfolio Communication from ${name}`
          })
        });

        if (response.ok) {
          console.log("[SERVER] Formspree dispatch succeeded!");
          return res.json({ success: true, provider: 'formspree' });
        } else {
          const text = await response.text();
          let errDetail = "Formspree rejected submission";
          try {
            const parsed = JSON.parse(text);
            errDetail = parsed.error || parsed.message || errDetail;
          } catch (e) {}
          throw new Error(errDetail);
        }
      } else {
        console.log(`[SERVER] Dispatching to Web3Forms: ${web3FormsKey}`);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name,
            email,
            subject: `Portfolio Communication from ${name}`,
            message: `Selected Focus Track: ${track}\n\nProject Brief/Query:\n${brief}`,
            from_name: 'Ivan Lewis Portfolio'
          })
        });

        const data = await response.json();
        if (data.success) {
          console.log("[SERVER] Web3Forms dispatch succeeded!");
          return res.json({ success: true, provider: 'web3forms' });
        } else {
          throw new Error(data.message || 'Web3Forms rejected submission');
        }
      }
    } catch (err: any) {
      console.error('[SERVER] Contact submission failed:', err);
      return res.status(400).json({ success: false, error: err.message || 'Contact submission routing failed' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
