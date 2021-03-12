import React, { useState, useEffect } from "react";
import AboutYourSelfForm from "../../forms/headOfHouseHold/AboutyourSelfForm";

const AboutYourSelfPageNew = (props) => {
  const formValidation = (errorsData) => {
    props.onFormControlChange(errorsData)
  }
  return (
    <div>
      <AboutYourSelfForm formValidation={formValidation} />
    </div>
  );
};

export default AboutYourSelfPageNew;
