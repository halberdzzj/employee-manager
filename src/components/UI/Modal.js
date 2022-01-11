import styles from './Modal.module.css';
import { Button } from "@mui/material";



const Modal = (props) => {
    const employeeName = `${props.employee.firstName} ${props.employee.lastName}`


    return (
        <>
            <div className={styles.backdrop} />
            <div open={props.open} className={styles.modal} onClose={props.close}>
                <div>
                    <h3>{`Confirm to delete this employee (${employeeName})?`}</h3>
                    <div className={styles.actions}>
                        <Button variant='contained' color="error" onClick={props.onConfirmDelete}>Delete</Button>
                        <Button style={{ marginLeft: '20px' }} variant='contained' onClick={props.onCloseModal}>Cancel</Button>
                    </div>
                </div>
            </div>
        </>)
}

export default Modal;