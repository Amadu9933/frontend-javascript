interface Student {
  firstName: string;
  LastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  LastName: "Doe",
  age: 20,
  location: "Accra",
};

const student2: Student = {
  firstName: "Jane",
  LastName: "Smith",
  age: 22,
  location: "Salaga",
};
const studentsList: Student[] = [student1, student2];
