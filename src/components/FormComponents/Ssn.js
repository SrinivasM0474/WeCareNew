
import React, { useState } from "react";
import MaskedInput from 'react-text-mask';

const Ssn = (props) => {
    const [isType, setIsType] = useState('text')
    const changeValids = (e) => {
        e.target.value.length === 11 ? setIsType('password') : setIsType('text')
    }
    return (
        <div className="input-block">
            <div className='floating_labels'>
                <MaskedInput
                    mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="floating-input"
                    autoComplete='off'
                    type={isType}
                    guide={false}
                    id="my-input-id"
                    onBlur={() => { }}
                    onChange={(e) => { changeValids(e) }}
                    required
                />
                <label>{props.title}</label>
            </div>

        </div>
    );
};

export default Ssn;