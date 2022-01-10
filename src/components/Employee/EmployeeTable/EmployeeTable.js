import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const EmployeeTable = () => {
  const sampleData = [
    {
      firstName: "Lilliana",
      lastName: "Kertzmann",
      email: "Soledad39@hotmail.com",
      number: 6568945623,
      gender: "male",
      id: "1",
    },
    {
      firstName: "Abigayle",
      lastName: "Kovacek",
      email: "Jaunita95@yahoo.com",
      number: 6565498712,
      gender: "male",
      id: "2",
    },
    {
      firstName: "Emmet",
      lastName: "Mraz",
      email: "Elyssa_Zieme35@hotmail.com",
      number: 6588965423,
      gender: "male",
      id: "3",
    },
    {
      firstName: "Luna",
      lastName: "Waters",
      email: "Sonya.Goodwin@gmail.com",
      number: 6596385274,
      gender: "female",
      id: "4",
    },
    {
      firstName: "Dusty",
      lastName: "O'Conner",
      email: "Floyd28@gmail.com",
      number: 6595789632,
      gender: "male",
      id: "5",
    },
    {
      firstName: "Chaz",
      lastName: "Beier",
      email: "Adrianna_Pagac38@hotmail.com",
      number: 6588747996,
      gender: "female",
      id: "6",
    },
    {
      firstName: "Tara",
      lastName: "Morissette",
      email: "Margarita.Schiller@yahoo.com",
      number: 6596969685,
      gender: "male",
      id: "7",
    },
    {
      firstName: "Abbigail",
      lastName: "Koch",
      email: "Hortense.Donnelly@hotmail.com",
      number: 6588784545,
      gender: "male",
      id: "8",
    },
    {
      firstName: "Johann",
      lastName: "Wehner",
      email: "Aurelio.OHara70@hotmail.com",
      number: 6588888889,
      gender: "female",
      id: "9",
    },
    {
      firstName: "Valerie",
      lastName: "Dooley",
      email: "Hillard_Corwin@yahoo.com",
      number: 6587748985,
      gender: "male",
      id: "10",
    },
    {
      firstName: "Cicero",
      lastName: "Mann",
      email: "Lambert14@gmail.com",
      number: 6592364878,
      gender: "female",
      id: "11",
    },
    {
      firstName: "Alanna",
      lastName: "Hills",
      email: "May.Connelly48@hotmail.com",
      number: 6594368749,
      gender: "male",
      id: "12",
    },
  ];



  const columnDefs = [
    { headerName: "First Name", field: "firstName" },
    { headerName: "Last Name mdz", field: "lastName" },
    { headerName: "Email", field: "email" },
    { headerName: "Phone Number", field: "number" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Action", field: "" },
  ];


  return (
    <div className="ag-theme-balham" style={{ width: "auto", height: "1600px" }}>
      <AgGridReact columnDefs={columnDefs} rowData={sampleData} />
    </div>
  );
};

export default EmployeeTable;
