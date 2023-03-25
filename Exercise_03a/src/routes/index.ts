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

router.put("/:id", (req: Request, res: Response) => {
  const body = req.body;
  const product = products.findIndex(
    (product) => product.id === JSON.parse(req.params.id)
  );
  if (product === -1) {
    res.status(400).send({ message: "Dados inválidos para atualizar!" });
  } else {
    products[product] = body;
    res.status(200).send({ message: "Produto atualizado com sucesso!" });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const product = products.findIndex(
    (product) => product.id === JSON.parse(req.params.id)
  );
  if (product === -1) {
    res.status(400).send({ message: "Dados inválidos para exclusão!" });
  } else {
    products.splice(product, 1);
    res.status(200).send({ message: "Produto excluído com sucesso!" });
  }
});

export default router;
