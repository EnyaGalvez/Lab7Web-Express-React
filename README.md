# Laboratorio 7: Express.js y React
Enya Gálvez - 24693 <br>
Sistemas y tecnologías web <br>

## Parte 1: Servidor Express sobre Node.js
### http vs Express
---
| http      | Express    |
|-----------|------------|
| Módulo **incorporado** de <span style="color:#99ff99; background-color:#264625">Node.js</span> para crear servidores      | Librería externa que **envuelve** al módulo `http`    |
| Cada petición se recibe como un objeto crudo. El encabezado, el Content-Type, los códigos de estado y el cuerpo de la respuesta deben manejarse manualmente. | Agrega una capa de herramientas diseñadas especificamente para construir servidores web. Es el framework más usado del ecosistema Node.js. |
---

### Diferencias generales
#### 1. Definición de rutas
Con `http`, hay un único punto de entrada para todas las peticiones.
Hay que indicar manualmente qué hacer según `req.url`:

````js
if (req.url === "/info") {
    const info = {
      mensaje: "El Server de información académica funcionando correctamente",
      curso: "Sistemas y tecnologías web",
      tecnologia: "Node.js (v18.19.1) - modulo http nativo"

    }
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(info, null, 2))
    return
  }
````

<br>Con Express, cada ruta se declara de forma independiente con su
propio método HTTP. El enrutamiento está incorporado:

````js
app.get("/info", (req, res) => {
  const info = {
    mensaje: "Servidor de información académica funcionando correctamente.",
    curso: "Sistemas y tecnologías web",
    tecnologia: "Express.js sobre Node.js (v18.19.1)"
  };

  res.app.set('json spaces', 2);
  res.json(info)
})
````
