const validateRequestPayload = (reqPayload = {}, validationConfig = []) => {

    const isError = [];
    
    const vConfigLength =  validationConfig.length;
    for(let i  = 0; i < vConfigLength; i++){
        const keyObj = validationConfig[i]
        
        const { key, type, isRequired =  false } = keyObj;
        const isKeyFound = reqPayload[key];
        if(isRequired && !isKeyFound){
            isError.push({
                key, 
                error: `${key} is Required`,
                message: `required type is ${type}`
            })
        }
        if(isKeyFound && type !== "string" && type !== typeof isKeyFound){
            isError.push({
                key, 
                error: `${key} is Invlaid Type`,
                message: `required type is ${type}`
            })
        }
    }
    return isError;
}



module.exports = { validateRequestPayload, validateRequestQueryParams };