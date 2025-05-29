// Type RowID
type RowID = number;

// Interface RowElement
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional field
}

export { RowID, RowElement };
