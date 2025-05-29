interface Student {
  firstName: string;
  LastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Amadu",
  LastName: "Hamza",
  age: 20,
  location: "Accra",
};

const student2: Student = {
  firstName: "Ahmed",
  LastName: "Sadia",
  age: 22,
  location: "Salaga",
};
const studentsList: Student[] = [student1, student2];

// Function to render a table
function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  // const table = document.createElement("table");
  // const headerRow = document.createElement("tr");

  // // Create table headers
  // const headerFirstName = document.createElement("th");
  // headerFirstName.textContent = "First Name";
  // const headerLocation = document.createElement("th");
  // headerLocation.textContent = "Location";

  // headerRow.appendChild(headerFirstName);
  // headerRow.appendChild(headerLocation);
  //table.appendChild(headerRow);

  // Append rows for each student
  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
