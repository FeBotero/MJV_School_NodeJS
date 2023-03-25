import { Request, Response, Router } from "express";

const router = Router();

const students = [
  {
    name: "Felipe Botero",
    email: "fbotero@gmail.com",
    cpf: "00975101064",
    password: "123456",
    age: 34,
  },
  {
    name: "Marcelo Castro",
    email: "mcastro@gmail.com",
    cpf: "83190349061",
    password: "461321",
    age: 30,
  },
  {
    name: "Fernanda Silva",
    email: "fsilva@gmail.com",
    cpf: "46047476015",
    password: "123154",
    age: 19,
  },
];

router.get("/", (req: Request, res: Response) => {
  res.send(students);
});

router.get("/:document", (req: Request, res: Response) => {
  const student = students.find((std) => std.cpf === req.params.document);
  if (!student)
    return res.status(400).send({ message: "Estudante não encontrado!" });
  res.status(200).send(student);
});

router.post("/", (req: Request, res: Response) => {
  const body = req.body;
  students.push(body);
  res.send(students);
});

router.delete("/remove/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.cpf == req.params.document
  );
  if (studentIndex === -1) {
    return res.status(400).send({ message: "Estudante não encontrado!" });
  } else {
    students.splice(studentIndex, 1);
    res.status(200).send({ message: "Estudante excluído com sucesso!" });
  }
});
router.put("/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.cpf == req.params.document
  );
  if (studentIndex === -1) {
    return res.status(400).send({ message: "Estudante não encontrado!" });
  }
  students[studentIndex] = req.body;
  res.status(200).send({ message: "Estudante atualizado com sucesso!" });
});

export default router;
