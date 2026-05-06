# Laboratorio 7: Express.js y React
Enya Gálvez - 24693 <br>
Sistemas y tecnologías web <br>

## Parte 1: Servidor Express sobre Node.js
### http vs Express

| http      | Express    |
|-----------|------------|
| Módulo **incorporado** de Node.js para crear servidores      | Librería externa que **envuelve** al módulo `http`    |
| Cada petición se recibe como un objeto crudo. El encabezado, el Content-Type, los códigos de estado y el cuerpo de la respuesta deben manejarse manualmente. | Agrega una capa de herramientas diseñadas especificamente para construir servidores web. Es el framework más usado del ecosistema Node.js. |


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
<br>

#### 2. Envío de respuestas
Con `http` se debe escribir el encabezado y el cuerpo por separado y recordar el tipo MIME correcto cada vez:

````js
res.writeHead(200, { "Content-Type": "application/json" })
res.end(JSON.stringify({ ok: true }))
````
<br>Con Express existen métodos que hacen todo en un paso:

````js
res.json({ ok: true }) // establece Content-Type y serializa solo
res.send("texto") // detecta el tipo automáticamente
res.status(404).json({...}) // encadena código de estado y respuesta
````
<br>

#### 3. Manejo del error 404
Con `http`, el bloque final es solo una sentencia if más dentro del callback. No existe un mecanismo oficial para "lo que no coincidió con nada". <br><br>
*Por otro lado*, con Express existe `app.use()` al final del archivo, que actúa como un receptor universal para cualquier ruta no registrada. Es un patrón estándar reconocible por cualquier desarrollador Express. <br><br>

#### 4. Escabilidad y organización
Con `http` a medida que crece el codigo, el único callback se convierte en un bloque de `if/else` muy largo y difícil de mantener. <br><br>
En cambio, express permite dividir las rutas en archivos separados usando `express.Router()`, lo que mantiene el código organizado sin importar cuántas rutas tenga el proyecto.

#### Carpeta de videos
Solo Video de express: [https://drive.google.com/drive/folders/1KE33djkg8UzNWTpCM8uRbKHCLl2RT21p?usp=sharing](https://drive.google.com/drive/folders/1KE33djkg8UzNWTpCM8uRbKHCLl2RT21p?usp=sharing)
