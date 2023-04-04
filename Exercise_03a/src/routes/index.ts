import { Request, Response, Router } from "express";
import productsService from "../service/products.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  productsService.getAll();
});

router.post("/", (req: Request, res: Response) => {
  try {
    productsService.createProduct(req.body);
    res.status(201).send({ message: "Produto cadastrado com sucesso" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  try {
    productsService.updateProduct(req.params.document, req.body);
    res.status(200).send({ message: "Produto atualizado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    productsService.deleteProduct(req.params.document);
    res.status(200).send({ message: "Produto excluído com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
