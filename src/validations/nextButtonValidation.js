const nextButtonValidation = (data) => {
    console.log('data', data)

    let valid = data.filter((val) => {
        return val.valid !== 'isValid'

    })
    let validData = valid.length === 0 ? false : true;
    console.log('nextButtonValidation', validData)
    return validData



}
export default nextButtonValidation