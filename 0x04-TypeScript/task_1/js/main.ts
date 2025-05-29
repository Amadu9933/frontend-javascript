interface Teacher {
  readonly firstName: string; // Read-only, modifiable only during initialization
  readonly lastName: string; // Read-only, modifiable only during initialization
  fullTimeEmployee: boolean; // Always defined
  yearsOfExperience?: number; // Optional
  location: string; // Always defined
  [key: string]: any; // Allows additional attributes
}

const teacher3: Teacher = {
  firstName: "Amadu",
  lastName: "Hamza",
  fullTimeEmployee: false,
  location: "Accra",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number; // Required attribute specific to Directors
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17, // Specific to Directors
};

console.log(director1);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
