import express from "express";
import cors from "cors";
import productsRouter from "./routes/index";
import connection from "./config/database";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

connection
  .then(() => {
    console.log("Banco de dados Conectado");
    app.listen(port, () => {
      console.log("Aplicação online na porta:", 3000);
    });
  })
  .catch((error) => console.log(error));
