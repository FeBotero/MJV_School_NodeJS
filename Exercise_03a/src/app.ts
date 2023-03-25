import express from "express";
import cors from "cors";
import productsRouter from "./routes/index";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log("Servidor rodando com sucesso!");
});
