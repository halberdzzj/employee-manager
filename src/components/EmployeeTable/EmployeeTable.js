import { AgGridReact  } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useState } from 'react'
import { fetchEmployees } from "../../services/api-service";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPE } from "../../store/state-manager";
import EmployeeActions from "../EmployeeActions/EmployeeActions";
import { Fragment } from "react";
import Modal from "../UI/Modal";
import { useNavigate } from "react-router-dom";

const EmployeeTable = () => {

  const employees = useSelector(state => state.employees)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  if (employees.length === 0) {
    fetchEmployees((value) => {
      dispatch({ type: ACTION_TYPE.INIT, data: value })
    })

  }


  const [modalOpen, setModalOpen] = useState(false);
  const [rowFocused, setRowFocused] = useState(null);



  const columnDefs = [
    { headerName: "First Name", field: "firstName", resizable: true },
    { headerName: "Last Name mdz", field: "lastName", resizable: true },
    { headerName: "Email", field: "email", resizable: true },
    { headerName: "Phone Number", field: "number", resizable: true },
    { headerName: "Gender", field: "gender", resizable: true },
    {
      headerName: "Action", field: "id", cellRendererSelector: (param) => {
        return {
          component: 'actionCellRenderer',
          params: {
            onEdit: () => {
              console.log(param, 'edit')
              setRowFocused(param.data)
              navigate(`/employee/edit/${param.data.id}`)

            },
            onDelete: () => {
              setModalOpen(true)
              setRowFocused(param.data)
              console.log(param.value, 'delete')
            }
          }
        }
      }, resizable: true
    },

  ];

  const deleteHandler = () => {

    dispatch({ type: ACTION_TYPE.REMOVE_EMPLOYEE, id: rowFocused.id })

    setModalOpen(false)

  }

  const closeModalHandler = () => {
    setModalOpen(false)
  }
  const gridReadyHandler = (params) => {
    params.api.sizeColumnsToFit()
  }

  return (
    <Fragment>
      {modalOpen && <Modal onConfirmDelete={deleteHandler} onCloseModal={closeModalHandler} employee={rowFocused} />}
      <div className="ag-theme-balham" >
        <AgGridReact columnDefs={columnDefs} rowData={employees} frameworkComponents={{
          actionCellRenderer: EmployeeActions,
        }} gridOptions={{
          rowHeight: 50, domLayout: 'autoHeight', defaultColDef: { resizable: true }, suppressCellSelection: true, enableRangeSelection: false
        }} onGridReady={gridReadyHandler} />
      </div >
    </Fragment>
  );
};

export default EmployeeTable;
