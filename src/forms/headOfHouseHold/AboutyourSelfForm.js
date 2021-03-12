
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import AppUser from '../../views/images/tellus-title-icon.png';
import FirstName from "../../components/FormComponents/FirstName";
import LastName from "../../components/FormComponents/LastName";
import MiddleName from "../../components/FormComponents/MiddleName";
import FormHeader from "../../components/FormComponents/FormHeader";
import Suffix from "../../components/FormComponents/Suffix";
import OptionsField from "../../components/FormComponents/OptionsField";
import FormDate from "../../components/FormComponents/FormDate";
import Ssn from "../../components/FormComponents/Ssn";
import * as NAMES from '../../constants';
import FormData from "../../utils";
import FirstNameIcon from './../../views/images/first-name-icon.png';
import LastNameIcon from './../../views/images/last-name-icon.png';
import nextButtonValidation from '../../validations/nextButtonValidation';

const AboutYourSelfForm = (props) => {
  const [errorfirstName, setErorFirstName] = React.useState({ valid: 'isNotValid' });
  const [errorlastName, setErrorLastName] = React.useState({ valid: 'isNotValid' });
  const [errordate, setErorDate] = React.useState({ valid: 'isNotValid' });
  useEffect(() => {
    let data = [errorfirstName, errorlastName, errordate]
    let valid = nextButtonValidation(data)
    props.formValidation(valid)
  })
  const formValidation = (errorsData) => {
    if (errorsData.firstName) {
      setErorFirstName((pre) => { return { ...pre, valid: errorsData.firstName, } })
    }
    if (errorsData && errorsData.lastName) {
      setErrorLastName((pre) => { return { ...pre, valid: errorsData.lastName } })
    }
    if (errorsData && errorsData.date) {
      setErorDate((pre) => { return { ...pre, valid: errorsData.date } })
    }
  }


  return (
    <div>
      {console.log('errordate', errordate)}
      <Container className="container" maxWidth="md">
        <div className="about-yourself">
          <FormHeader img={AppUser}
            headerTitle={NAMES.ABOUT_YOURSELF_TITLE}
            alt={'image'} />
          <div className="input-form-fields">
            <FirstName
              placeHolderText={NAMES.FIRST_NAME}
              autoComplete={'off'}
              icon={FirstNameIcon}
              formValidation={formValidation}
            />

            <MiddleName
              placeHolderText={NAMES.MIDDLE_NAME}
              autoComplete={'off'} />
            {/* <FirstName
              name={'Last Name'}
              placeHolderText={NAMES.LAST_NAME}
              autoComplete={'off'}
              icon={FirstNameIcon}
              formValidation={formValidation}
            /> */}
            <LastName
              placeHolderText={NAMES.LAST_NAME}
              autoComplete={'off'}
              formValidation={formValidation}
            />
            <Suffix data={FormData.options} title={NAMES.SUFFIX_TITLE} />
            <FormDate title={NAMES.DATE_TITLE} formValidation={formValidation} />
            <OptionsField data={FormData.gender} title={NAMES.GENDER_TITLE} />
            <Ssn title={NAMES.SSN_TITLE} />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default AboutYourSelfForm;
