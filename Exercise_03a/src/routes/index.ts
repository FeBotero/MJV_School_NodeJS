import { Request, Response, Router } from "express";
import ProductService from "../service/products.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await ProductService.getAll();
  res.send(products);
});

router.get("/:document", async (req: Request, res: Response) => {
  const product = await ProductService.getByID(req.params.id);
  if (!product)
    return res.status(400).send({ message: "Produo não encontrado!" });
  res.send(product);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await ProductService.createProduct(req.body);
    res.status(201).send({ message: "Produto cadastrado com sucesso" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    await ProductService.updateProduct(req.params.document, req.body);
    res.status(200).send({ message: "Produto atualizado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await ProductService.deleteProduct(req.params.document);
    res.status(200).send({ message: "Produto excluído com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
