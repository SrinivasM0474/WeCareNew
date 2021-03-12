import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import MailIcon from "@material-ui/icons/Mail";
import * as NAMES from '../../constants';
import FormData from '../../utils'

import MaskedInput from 'react-text-mask';

const PhoneNumber = (props) => {
    const [phoneNo, setPoneNO] = useState(null)
    //Ref instances
    const loginForm = React.useRef(null);
    const phoneNoValidation = (e) => {
        e.preventDefault()
        e.target.value.length === 12 ? setPoneNO(e.target.value) : setPoneNO('')
        props.formValidation(e.target.value.length === 12 ? { phoneNo: 'isValid' } : { phoneNo: 'isNotValid' })
    }

    return (
        <form ref={loginForm} >
            <div className="input-block">
                {/* <div className={phoneNo === '' ? "floating_labels phone-bg phone-error" : 'floating_labels phone-bg'}> */}
                <div className={phoneNo === '' ? "floating_labels phone-bg phone-error" : 'floating_labels phone-bg'}>
                    <MaskedInput
                        mask={FormData.mask}
                        className='floating-input'
                        autoComplete={props.autoComplete}
                        guide={false}
                        id="my-input-id"
                        onBlur={(e) => { phoneNoValidation(e) }}
                        // onChange={(e) => { phoneNoValidation(e) }}
                        required
                    />
                    <label>{NAMES.PHONE_NUMBER_TEXT}</label>
                    {<span>{phoneNo === '' ? "Phone number is required" : ''}</span>}
                </div>
            </div>
        </form>
    )
}
export default PhoneNumber;
