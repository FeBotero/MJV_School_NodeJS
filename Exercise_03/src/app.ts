import express from "express";
import routes from "./routers/index";

import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;
app.use(routes);

app.listen(port, () => {
  console.log("Aplicação online na porta: ", port);
});
