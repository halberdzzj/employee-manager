import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import styles from './EmployeePage.module.css'

const EmployeePage = () => {

  const navigate = useNavigate();



  return (
    <div className={styles.container}>
      <div style={{marginBottom: '10px'}}>
        <Button variant="contained" className={styles.button} onClick={() => { navigate("/employee/add") }}>Add Employee</Button>
      </div>
      <EmployeeTable />
    </div>

  );
};

export default EmployeePage;
