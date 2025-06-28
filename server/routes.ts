import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Here you could integrate with an email service like Nodemailer
      // For now, we'll just log the message
      console.log("New contact message received:", message);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "Dheeraj Singh BishtResume_1750986425242.docx");
    
    // Check if file exists
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Dheeraj_Singh_Bisht_Resume.docx", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(500).json({ error: "Failed to download resume" });
        }
      });
    } else {
      console.error("Resume file not found at:", resumePath);
      res.status(404).json({ error: "Resume file not found" });
    }
  });

  // Project documentation endpoint
  app.get("/api/project-docs/splitwise", (req, res) => {
    const docsPath = path.join(process.cwd(), "attached_assets", "Assignment SPLITWISE 1.pptx_1751071439115.pdf");
    
    // Check if file exists
    if (fs.existsSync(docsPath)) {
      res.download(docsPath, "Splitwise_Clone_Documentation.pdf", (err) => {
        if (err) {
          console.error("Error downloading Splitwise documentation:", err);
          res.status(500).json({ error: "Failed to download documentation" });
        }
      });
    } else {
      console.error("Splitwise documentation file not found at:", docsPath);
      res.status(404).json({ error: "Documentation file not found" });
    }
  });

  // Project video endpoint
  app.get("/api/project-video/shopping-cart", (req, res) => {
    const videoPath = path.join(process.cwd(), "attached_assets", "shopping carr_1751071816812.avi");
    
    // Check if file exists
    if (fs.existsSync(videoPath)) {
      // Set appropriate headers for video streaming
      const stat = fs.statSync(videoPath);
      const fileSize = stat.size;
      const range = req.headers.range;

      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'Range');

      if (range) {
        // Support for video seeking/streaming
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/x-msvideo',
          'Cache-Control': 'no-cache'
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/x-msvideo',
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache'
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
      }
    } else {
      console.error("Shopping cart video file not found at:", videoPath);
      res.status(404).json({ error: "Video file not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
