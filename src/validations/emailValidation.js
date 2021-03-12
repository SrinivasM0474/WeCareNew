const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Emailvalidation = (key, loginForm) => {
    let errorsData = {};
    let loginFormelements = loginForm.current;
    let emailValid = emailRegex.test(loginFormelements[key].value);
    if (key === 'email' && !emailValid) {
        errorsData[key] = key + ' is required';
        return errorsData
    } else {
        delete errorsData[key];
        return errorsData
    }


};

export default Emailvalidation