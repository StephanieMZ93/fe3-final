import React, { useContext, useState } from "react";

import ThemeContext from "../../context/ThemeContext";
import { DARK } from "../../common/const";
import Form from "../../Components/form/Form";
import "./contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [errorMessage, setErrorMessage] = useState();
  const [messageSuccess, setMessageSuccess] = useState();

  return (
    <div className={theme === DARK ? "dark" : "light"}>
      <div className="p-4">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form
          setMessage={setMessageSuccess}
          setErrorMessage={setErrorMessage}
        />
        {errorMessage && <h6>{errorMessage}</h6>}
        {messageSuccess && <h4>{messageSuccess}</h4>}
      </div>
    </div>
  );
};

export default Contact;
