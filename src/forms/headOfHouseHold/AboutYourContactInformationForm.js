
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FormHeader from "../../components/FormComponents/FormHeader";
import OptionsField from "../../components/FormComponents/OptionsField";
import * as NAMES from '../../constants';
import FormData from "../../utils";
import PhoneNumber from '../../components/FormComponents/PhoneNumber';
import EmailForm from '../../components/FormComponents/EmailForm';
import AccommadationNeed from '../../components/FormComponents/AccommadationNeed';
import Suffix from "../../components/FormComponents/Suffix";
import nextButtonValidation from '../../validations/nextButtonValidation';

const AboutYourContactInformationForm = (props) => {

    const [phoneNo, setPhoneNo] = React.useState({ valid: 'isNotValid' });
    const [email, setEmail] = React.useState({ valid: 'isNotValid' });
    const [preferredLanguage, SetpreferredLanguage] = React.useState({ valid: 'isNotValid' });
    const [showAccommdation, setShowAccommdation] = React.useState(false);
    useEffect(() => {
        let data = [phoneNo, email, preferredLanguage]
        let valid = nextButtonValidation(data)
        props.formValidation(valid)
    })
    const formValidation = (errordata) => {
        console.log('>>>>>>>>,errordata', errordata)
        if (errordata.email) {
            setEmail((pre) => { return { ...pre, valid: errordata.email, } })
        }
        if (errordata.phoneNo) {
            setPhoneNo((pre) => { return { ...pre, valid: errordata.phoneNo } })
        }
        if (errordata.preferredLanguage) {
            SetpreferredLanguage((pre) => { return { ...pre, valid: errordata.preferredLanguage } })
        }

    }

    const showAccommdationValidation = (data) => {
        setShowAccommdation(data)
    }
    return (
        <div>
            <Container className="container" maxWidth="md">
                <div className="about-yourself">
                    <FormHeader img={AppUser}
                        headerTitle={NAMES.ABOUT_YOUR_CONTACTINFORMATION_TITLE}
                        alt={'image'} />
                    <div className="input-form-fields">
                        <OptionsField
                            data={FormData.primaryPhoneNumber}
                            title={NAMES.PRIMARY_PHONE_TEXT}
                            labelClass={true} />
                        <PhoneNumber
                            autoComplete={'off'}
                            formValidation={formValidation} />
                        <EmailForm
                            placeHolderText={NAMES.EMAIL_TEXT}
                            autoComplete={'off'} addClass={true}
                            formValidation={formValidation} />
                        <Suffix
                            data={FormData.preferredLanguage}
                            title={NAMES.PREFERRED_LANGUAGE}
                            labelClass={true}
                            formValidation={formValidation} />
                        <OptionsField
                            data={FormData.yesNoOptions}
                            title={NAMES.INTERPRETER_TEXT}
                            labelClass={true} />
                        <OptionsField
                            data={FormData.emailPhoneMailOptions}
                            title={NAMES.COMMUNICATE_TEXT}
                            labelClass={true} />
                        <OptionsField
                            data={FormData.yesNoOptions}
                            title={NAMES.ACCOMMODATION_TEXT}
                            labelClass={true}
                            formValidation={showAccommdationValidation} />
                        {showAccommdation && <Suffix
                            data={FormData.kindOfAccommodations}
                            title={NAMES.KINDOF_ACCOMMODATION_TEXT}
                            labelClass={true} />}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutYourContactInformationForm;
