import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './EditEmployee.module.css';
import EmployeeForm from "../EmployeeForm/EmployeeForm";
const EditEmployee = () => {
  let { id } = useParams();
  const employees = useSelector(state => state.employees)
  const employeeToEdit = employees.find(e => e.id.toString() === id.toString())
  console.log(employees, employeeToEdit)



  return (
    <div className={styles.center}>
      <h1>Edit Employee</h1>
      <EmployeeForm formType="edit" employee={employeeToEdit} />
    </div>

  );
};

export default EditEmployee;
