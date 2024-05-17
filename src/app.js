import { envs } from './config/env.js';
import { startServer } from './server/server.js';


const main = () => {
  console.log(envs.PORT);
  console.log(envs.PUBLIC_PATH);
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  });
};

//función agnostosica autoconvocada
//agnostica --> no tiene nombre
//autoconvocada --> se ejecuta con los parentesis
(async () => {
  main();
})();
