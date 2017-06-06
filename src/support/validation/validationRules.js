const isRequiredText = fieldName => `${fieldName} is required!`;
const emailText = fieldName => `${fieldName} is not valid!`;

export const required = (text) => {
  if (text) {
    return null;
  } 
  
  return isRequiredText;

};

export const email = (text) => {
    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    
    if (re.test(text)) {
        return null;
    }

    return emailText;
}
