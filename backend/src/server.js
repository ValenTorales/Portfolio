import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projects from "./data/projects.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API" });
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});
