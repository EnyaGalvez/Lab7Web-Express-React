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


/*
  if (req.url === "/api/status") {
    const status = {
      ok: true,
      status: "online",
      puerto: PORT
    }
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(status, null, 2))
    return
  }

  const respuesta404 = {
    error: "Ruta no encontrada",
    rutaVisitada: req.url,
    mensaje: `La ruta "${req.url}" no existe en este servidor.`
  }

  res.writeHead(404, { "Content-Type": "application/json" })
  res.end(JSON.stringify(respuesta404, null, 2))
})

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
  console.log(`Rutas disponibles:`)
  console.log(`  GET /`)
  console.log(`  GET /info`)
  console.log(`  GET /saludo`)
  console.log(`  GET /api/student`)
  console.log(`  GET /api/status`)
})*/

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})