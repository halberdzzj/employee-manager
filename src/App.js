import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import EmployeeTable from './components/Employee/EmployeeTable/EmployeeTable';



function App() {
  return (
    <Fragment>
      <button>Add</button>
      <EmployeeTable /> 
    </Fragment>
  );
}

export default App;
