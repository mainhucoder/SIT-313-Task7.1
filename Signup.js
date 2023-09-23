import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "./IC";
import { auth } from "./firebase";

import styles from "./Signup.module.css";

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      setErrorMessage("Complete all fields");
      return;
    }
    setErrorMessage("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: formData.fullName,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMessage(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="First Name"
          placeholder="Enter first name"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, fullName: event.target.value }))
          }
        />
        <InputControl
          label="Last Name"
          placeholder="Enter last name"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, fullName: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMessage}</b>
          <button onClick={handleSubmit} disabled={submitButtonDisabled}>
            Signup
          </button>
            Already have an account?{" "}
              <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
