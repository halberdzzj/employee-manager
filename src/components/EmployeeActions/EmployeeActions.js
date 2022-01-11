import { Button } from "@mui/material";

const EmployeeActions = (props) => {
  const editHandler = () => {
    props.onEdit()
  }

  const deleteHandler = () => {
    props.onDelete()
  }
  return (
    <div>
      <Button variant="contained" onClick={editHandler}>Edit</Button>
      <Button style={{marginLeft: '10px'}} variant="contained" color='error' onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default EmployeeActions;
