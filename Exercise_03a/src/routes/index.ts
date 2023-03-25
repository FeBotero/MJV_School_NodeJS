import { Request, Response, Router } from "express";
import { products } from "../db/db";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(products);
});

router.post("/", (req: Request, res: Response) => {
  const body = req.body;
  if (!body) {
    res.status(400).send({ message: "Dados inválidos para cadastro!" });
  } else {
    products.push(body);
    res.status(201).send({ message: "Produto cadastrado com sucesso" });
  }
});
export default router;
