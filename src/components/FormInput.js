import React from "react";

const FormInput = ({ type, placeholder, name, icon }) => {
  return (
    <div className="form-row">
      <input
        type={type}
        name={name}
        className="form-input"
        placeholder={placeholder}
      />
      <span>{icon}</span>
    </div>
  );
};

export default FormInput;
