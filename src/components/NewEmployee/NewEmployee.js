import EmployeeForm from "../EmployeeForm/EmployeeForm";
import styles from './NewEmployee.module.css';
const NewEmployee = () => {
  return (
    <div className={styles.center}>
      <h1>Add Employee</h1>
      <EmployeeForm formType="new"/>
    </div>
  );
};

export default NewEmployee;
