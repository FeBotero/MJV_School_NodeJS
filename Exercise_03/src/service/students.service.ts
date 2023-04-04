import { Student } from "../models/student.model";

class studentsService {
  students: Array<Student> = [
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
  getAll() {
    return this.students;
  }
  getByDocument(document: string) {
    const student = this.students.find((std) => std.cpf === document);
    return student;
  }
  createStudent(body: Student) {
    this.students.push(body);
  }
  deleteStudent(document: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.cpf == document
    );
    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!");
    }
    this.students.splice(studentIndex, 1);
  }
  updateStudent(document: string, student: Student) {
    const studentIndex = this.students.findIndex(
      (student) => student.cpf == document
    );
    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!");
    }
    this.students[studentIndex] = student;
  }
}

export default new studentsService();
