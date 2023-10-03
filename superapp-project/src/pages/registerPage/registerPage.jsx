import React, { useState } from "react";
import RegisterForm from "../../components/registerForm/registerForm";
import "./registerPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  
  const [values, setValues] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Field Required",
      pattern: "^[A-Za-z ']{3,50}$",
      required: true,
    },
    {
      id: 2,
      name: "userName",
      type: "text",
      placeholder: "Username",
      errorMessage: "Field Required",
      pattern: "^[a-zA-Z][a-zA-Z0-9]{3,15}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Field Required",
      required: true,
    },
    {
      id: 4,
      name: "mobile",
      type: "text",
      placeholder: "Mobile",
      errorMessage: "Field Required",
      pattern: "^[0-9]{10}",
      required: true,
    },
    {
      id: 5,
      name: "checkbox",
      type: "checkbox",
      errorMessage: "Check this box if you want to proceed",
      label: "Share my registration data with Superapp",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("runnning")

    const data = new FormData(e.target);
    const personData = Object.fromEntries(data.entries());
    console.log(personData);

    
    // if (!formLocalGet) {
    //   alert("Fill form");
    //   return;
    // }

    const formJSON = JSON.stringify(personData);
    console.log(formJSON);
    const formDataLocal = localStorage.setItem("formData", formJSON);
    const formLocalGet = localStorage.getItem("formData");
    // const dataArray = JSON.parse(formLocalGet);


    // console.log(dataArray.name);

    window.location.href = "/category";

    // const nameStore = localStorage.setItem("name", personData.name);
    // const userNameStore = localStorage.setItem("userName", personData.userName);
    // const emailStore = localStorage.setItem("email", personData.email);
    // const mobileStore = localStorage.setItem("mobile", personData.mobile);
    

    
  };

  // const namePresent = localStorage.getItem("name")
  // const userNamePresent = localStorage.getItem("userName")
  // const emailPresent = localStorage.getItem("email")
  // const mobilePresent = localStorage.getItem("mobile")

  // const formInfo = [namePresent, userNamePresent, emailPresent, mobilePresent]

  
  // console.log(formLocalGet);

  // const handleButtonClick = () => {
    
  // }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1 className="img-title">Discover new things on Superapp</h1>
      <div className="background">
        <div className="formPage">
          <h1 className="register-title">Super app</h1>
          <h2 className="register-subtitle">Create your new account</h2>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <RegisterForm
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
              <button type="submit" className="signUp-btn">Sign Up</button>
          </form>
          <p className="t-c">
            By clicking on Sign up. you agree to Super app{" "}
            <span className="green-links">Terms and Conditions of Use</span>
          </p>
          <p className="pri-pol">
            To learn more about how Super app collects, uses, shares and
            protects your personal data please head Super app{" "}
            <span className="green-links">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
