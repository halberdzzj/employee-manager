import { createStore } from "redux";

export const ACTION_TYPE = {
  ADD_EMPLOYEE: "add-employee",
  REMOVE_EMPLOYEE: "remove-employee",
  EDIT_EMPLOYEE: "edit-employee",
  INIT: "init",
};

const dataInLocalStorage = localStorage.getItem('data');

const dataJSON = JSON.parse(dataInLocalStorage);

const employeeReducer = (state = { employees: dataJSON ? dataJSON.employees : [] }, action) => {
  let result;
  switch (action.type) {
    case ACTION_TYPE.INIT:

      result = { employees: action.data };
      break;
    case ACTION_TYPE.ADD_EMPLOYEE:
      result = { employees: [action.newEmployee, ...state.employees] };
      // action contains the employee object
      break;
    case ACTION_TYPE.REMOVE_EMPLOYEE:
      // action contains the employee id
      const updatedList = state.employees.filter(e => e.id.toString() !== action.id.toString())
      console.log(state.employees)
      result = { employees: updatedList }
      break;
    case ACTION_TYPE.EDIT_EMPLOYEE:
      const editedEmployee = action.employee;
      // const editedEmployeeList = state.employees.filter(e => e.id.toString() !== action.employee.id);
      const editedEmployeeList = state.employees.map(e => {
        if (e.id.toString() === action.employee.id.toString()) {
          return editedEmployee;
        } else {
          return e;
        }
      });
      result = { employees: editedEmployeeList };
      break;
    default:
      result = { employees: state.employees };
      break;
  }
  localStorage.setItem('data', JSON.stringify(result))
  return result;
};
const store = createStore(employeeReducer);

export default store;
