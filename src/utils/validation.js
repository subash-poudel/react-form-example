export function isValidName(name) {
  if(!name || name === '') {
    return {isValid: true, error: 'Invalid Full Name.'}
  }
  return {isValid: true, error: null};
}

export function isValidBirthday(birthday) {
  return {isValid: true, error: null};
}

export function isValidCar(car) {
  return {isValid: true, error: null};
}
