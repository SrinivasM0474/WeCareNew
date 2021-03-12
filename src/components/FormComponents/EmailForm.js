import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import EmailImg from '../../views/images/email-icon.png';
import Emailvalidation from '../../validations/emailValidation'

const EmailForm = (props) => {
    const loginForm = React.useRef(null);
    const [errors, setErrors] = React.useState(null);

    const validateForm = (key, loginForm) => {
        let errorsData = Emailvalidation(key, loginForm)
        let email = errorsData.email ? { email: 'isNotValid' } : { email: 'isValid' }
        setErrors(Object.assign({}, errorsData));
        props.formValidation(email)

    }
    return (
        <div className="input-block">
            {console.log(errors, '..........')}
            <form ref={loginForm} >
                <TextField
                    name='email'
                    autoComplete={props.autoComplete}
                    onBlur={() => { validateForm('email', loginForm); }}
                    onChange={() => { validateForm('email', loginForm); }}
                    id="standard-basic"
                    label={props.placeHolderText}
                    className="input-field"
                    error={errors && errors.email}
                    helperText={errors && errors.email ? "email is required" : ""}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <img src={EmailImg} alt='email' />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </div>
    )
}
export default EmailForm;
