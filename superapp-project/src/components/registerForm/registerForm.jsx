import React, { useState } from "react";
import "./registerForm.css";

const RegisterForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="registerForm">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=>inputProps.name === "checkbox" && setFocused(true)}
        focused={focused.toString()}
      />
      <label>{label}</label>
      <span className="warning-msg">{errorMessage}</span>
    </div>
  );
};

export default RegisterForm;
