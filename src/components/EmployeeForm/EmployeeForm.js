import MyInput from '../UI/Input'
import { Button, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_TYPE } from '../../store/state-manager';
import styles from './EmployeeForm.module.css';


const EmployeeForm = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    let employeeProps, formType;
    const [firstNameVal, setFirstNameVal] = useState('');
    const [lastNameVal, setLastNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [phoneVal, setPhoneVal] = useState('');
    const [genderVal, setGenderVal] = useState('');

    const [isEditEmployee, setIsEditEmployee] = useState(false);
    useEffect(() => {
        formType = props.formType;
        employeeProps = props.employee ? props.employee : null;
        if (employeeProps) {
            setFirstNameVal(employeeProps.firstName);
            setLastNameVal(employeeProps.lastName);
            setEmailVal(employeeProps.email)
            setPhoneVal(employeeProps.number)
            setGenderVal(employeeProps.gender)
        }
        if (formType === 'edit') {
            setIsEditEmployee(true);

        }
    }, [])


    const submitHandler = (event) => {
        event.preventDefault();

        console.log(genderVal,'gender')
        if (firstNameVal.trim().length < 6 || firstNameVal.trim().length > 10) {
            setFirstNameIsValid(false);
            return;
        }

        if (lastNameVal.trim().length < 6 || lastNameVal.trim().length > 10) {
            setLastNameIsValid(false);
            return;
        }

        if (!emailVal.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            setEmailIsValid(false);
            return;
        }

        if (!+phoneVal.match(/65[6|8|9]\d{7}/) || phoneVal.length !== 10) {
            setPhoneIsValid(false)
            return
        }
        if (genderVal.trim().length < 1) {
            setGenderIsValid(false)
            return
        }

        const formData = {
            firstName: firstNameVal,
            lastName: lastNameVal,
            email: emailVal,
            number: phoneVal,
            gender: genderVal,
        }




        if (isEditEmployee) {
            dispatch({ type: ACTION_TYPE.EDIT_EMPLOYEE, employee: { ...formData, id: props.employee.id } })

        } else {
            dispatch({ type: ACTION_TYPE.ADD_EMPLOYEE, newEmployee: { ...formData, id: new Date().getTime() } })
        }
        navigate('/')

    }

    const [firstNameIsValid, setFirstNameIsValid] = useState(true);
    const [lastNameIsValid, setLastNameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [phoneIsValid, setPhoneIsValid] = useState(true);
    const [genderIsValid, setGenderIsValid] = useState(true);


    const firstNameChangeHandler = (event) => {
        setFirstNameIsValid(true);
        setFirstNameVal(event.target.value);
    }

    const lastNameChangeHandler = (event) => {
        setLastNameIsValid(true);
        setLastNameVal(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmailIsValid(true)
        setEmailVal(event.target.value)

    }
    const phoneChangeHandler = (event) => {
        setPhoneIsValid(true)
        setPhoneVal(event.target.value)

    }

    const genderChangeHandler = (event) => {
        setGenderIsValid(true)
        setGenderVal(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <MyInput isValid={firstNameIsValid} inputId="firstName" label="First Name" inputType="text" value={firstNameVal} onChange={firstNameChangeHandler} />
            <MyInput isValid={lastNameIsValid} inputId="lastName" label="Last Name" inputType="text" value={lastNameVal} onChange={lastNameChangeHandler} />
            <MyInput isValid={emailIsValid} inputId="email" label="Email" inputType="email" value={emailVal} onChange={emailChangeHandler} />
            <MyInput isValid={phoneIsValid} inputId="phone" label="Phone" inputType="number" value={phoneVal} onChange={phoneChangeHandler} />


            <div className={`${styles['form-control']} ${genderIsValid ? '' : styles.invalid}`}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup  row aria-label="gender" value={genderVal} name="row-radio-buttons-group" onChange={genderChangeHandler}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                {!genderIsValid && <label className={styles['invalid-label']}>Please select gender.</label> }</div>
            <Button className={`${styles.button} ${styles['form-control']}`} type="submit" variant="contained">Submit</Button>
        </form>
    )
}

export default EmployeeForm;