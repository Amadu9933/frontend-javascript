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
