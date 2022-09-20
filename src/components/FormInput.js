import React from "react";
const FormInput = ({ type, placeholder, name }) => {
  return (
    <div className="form-row">
      <input
        type={type}
        name={name}
        className="form-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
