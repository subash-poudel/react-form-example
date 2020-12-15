export function isValidName(name) {
  if(!name || name === '') {
    return {isValid: true, error: 'Invalid Full Name.'}
  }
  return {isValid: true, error: null};
}

export function isValidBirthday(birthday) {
  console.log(birthday)
  return {isValid: true, error: null};
}

export function isValidCar(car) {
  console.log(car)
  return {isValid: true, error: null};
}
