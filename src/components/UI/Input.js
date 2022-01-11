import { InputLabel, Input as InputUI } from "@mui/material";
import React, { useRef } from "react";
import styles from './Input.module.css'

const MyInput = (props) => {
    const inputRef = useRef()

    const WARNING_MSG = {
        firstName: 'Text length must be 6 to 10 characters.',
        lastName: 'Text length must be 6 to 10 characters.',
        email: 'Email address is invalid.',
        phone: 'Phone number is invalid. It should start with 65 and 10 digits in total.'
    }

    return (
        <div className={styles['form-control']}>
            <InputLabel htmlFor={props.inputId}>{props.label}</InputLabel>
            <InputUI className={props.isValid ? '' : styles.invalid} style={{ width: '100%' }} ref={inputRef} id={props.inputId} type={props.inputType} value={props.value} onChange={props.onChange} />
            {!props.isValid && <InputLabel className={styles['invalid-label']}>{WARNING_MSG[props.inputId]}</InputLabel>}
        </div>
    )
}
export default MyInput;