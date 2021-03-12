
import React, { useState } from "react";
import AboutYourContactInformationForm from '../../forms/headOfHouseHold/AboutYourContactInformationForm';


const AboutyourContactInformationPage = (props) => {
  const formValidation = (data) => {
    console.log('<<<<<<<', data)
    props.onFormControlChange(data)
  }
  return (
    <div>
      <AboutYourContactInformationForm
        formValidation={formValidation}
      />
    </div>
  );
};

export default AboutyourContactInformationPage;
