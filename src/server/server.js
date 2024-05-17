//toda la configuracion del servidor

import express from "express";
import path from "path";

export const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  //para poder usar middleware (use)
  app.use(express.static(public_path)); //contenido estatico que ponemos disponibe 
  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
};
