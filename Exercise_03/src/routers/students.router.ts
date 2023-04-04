import { Request, Response, Router } from "express";
import studentsService from "../service/students.service";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const students = studentsService.getAll();
  res.send(students);
});

router.get("/:document", (req: Request, res: Response) => {
  const student = studentsService.getByDocument(req.params.document);
  if (!student)
    return res.status(400).send({ message: "Estudante não encontrado!" });
  res.status(200).send(student);
});

router.post("/", (req: Request, res: Response) => {
  studentsService.createStudent(req.body);
  res.status(201).send({ message: "Estudante criado com sucesso!" });
});

router.delete("/remove/:document", (req: Request, res: Response) => {
  try {
    studentsService.deleteStudent(req.params.document);
    res.status(200).send({ message: "Estudante excluído com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});
router.put("/:document", (req: Request, res: Response) => {
  try {
    studentsService.updateStudent(req.params.document, req.body);
    res.status(200).send({ message: "Estudante atualizado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
