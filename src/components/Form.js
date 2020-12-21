import { useState } from "react";
import { isValidBirthday, isValidCar, isValidName } from "../utils/validation";
import "./Form.css";

const validationFunctions = {
  fullName: isValidName,
  birthday: isValidBirthday,
  cars: isValidCar,
};

const initialFormState = {
  fullName: {
    value: "",
    error: "",
    isValid: false,
  },
  birthday: {
    value: "",
    error: "",
    isValid: false,
  },
  cars: {
    value: "",
    error: "",
    isValid: false,
  },
  isFormValid: false,
};

function Form() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validationFunctions[[name]](value);
    const newData = { ...formData[[name]], ...isValid, ...{ value } };
    const newFormData = { ...formData, ...{ [name]: newData } };
    setFormData(newFormData);
  };
  const { fullName } = formData;
  return (
    <div>
      <form>
        <div className="form">
          <div>
            <label htmlFor="fullName">Full name:</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              value={fullName.value}
            />
            {fullName.error && <label>{fullName.error}</label>}
          </div>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cars">Cars</label>
            <select name="cars" onChange={handleChange}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
