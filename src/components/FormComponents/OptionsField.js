
import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import * as NAMES from '../../constants';

const OptionsField = (props) => {
    const [isGender, setIsGender] = useState(false);
    const gender = (val) => {
        setIsGender(val)
        if (props.title === NAMES.ACCOMMODATION_TEXT) {
            props.formValidation(val === 'Yes' ? true : false)
        }



    }
    return (
        <div className={props.addClass ? 'input-block gender-block p-t-16 r-address' : 'input-block gender-block p-t-16'}>
            <InputLabel className={props.labelClass ? "input-label label-width" : "input-label"}>{props.title}</InputLabel>
            <div className={props.addClass ? "gender yes-no-block" : 'gender'}>
                <ul>
                    {props.data.map((val) => {
                        return (
                            <li
                                className={val === isGender ? "selected" : ""}
                                onClick={() => gender(val)}>{val}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default OptionsField;