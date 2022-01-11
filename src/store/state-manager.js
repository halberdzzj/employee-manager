import { createStore } from "redux";

export const ACTION_TYPE = {
  ADD_EMPLOYEE: "add-employee",
  REMOVE_EMPLOYEE: "remove-employee",
  EDIT_EMPLOYEE: "edit-employee",
  INIT: "init",
};

const dataInLocalStorage = localStorage.getItem('data');

const dataJSON = JSON.parse(dataInLocalStorage);

// to create a new array/object, not to mutate the original array/object !!!!!!!!!!!!!!
const employeeReducer = (state = { employees: dataJSON ? dataJSON.employees : [] }, action) => {
  let result;
  switch (action.type) {
    case ACTION_TYPE.INIT:
      // if(localStorage.getItem('data')) 

      result = { employees: action.data };
      // localStorage.setItem('data',)
      break;
    case ACTION_TYPE.ADD_EMPLOYEE:
      result = { employees: [action.newEmployee, ...state.employees] };
      // action contains the user object
      break;
    case ACTION_TYPE.REMOVE_EMPLOYEE:
      // action contains the user id
      const updatedList = state.employees.filter(e => e.id.toString() !== action.id.toString())
      console.log(state.employees)
      result = { employees: updatedList }
      // result = { result: "remove" };
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
      // action contains the user id
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
