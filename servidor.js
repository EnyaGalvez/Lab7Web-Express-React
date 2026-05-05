import express from "express"
import fs from "fs/promises"
import path from "path"
import { obtenerSaludo } from "./saludo.js"

const PORT = 3001
const app = express()

app.get("/", (req, res) => {
  res.type("text/plain").send("Servidor activo")
})

app.get("/info", (req, res) => {
  const info = {
    mensaje: "Servidor de información académica funcionando correctamente.",
    curso: "Sistemas y tecnologías web",
    tecnologia: "Express.js sobre Node.js (v18.19.1)"
  };

  res.app.set('json spaces', 2);
  res.json(info)
})

app.get("/saludo", (req, res) => {
  res.type("text/plain").send(obtenerSaludo())
})

app.get("/api/student", async (req, res) => {
  const filePath = path.join(process.cwd(), "datos.json")
  const texto = await fs.readFile(filePath, "utf-8")
  res.type("application/json").send(texto)
})

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    status: "online",
    puerto: PORT
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    rutaVisitada: req.url,
    mensaje: `La ruta "${req.url}" no existe en este servidor.`
  })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})