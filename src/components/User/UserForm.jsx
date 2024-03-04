import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserLoginForm from "./UserLoginForm";
import UserSignupForm from "./UserSignupForm";

const UserForm = () => {
  const dispatch = useDispatch();

  const { showForm, formType } = useSelector((state) => state.user);
  const closeForm = () => {
    dispatch(toggleForm(false));
  };
  console.log(formType === "signup" ? "sign up" : "log in");

  const toglleCurrentFormType = (type) => {
    dispatch(toggleFormType(type));
  };
  return (
    showForm && (
      <>
        <div className={styles.overlay} onClick={closeForm} />
        {formType === "signup" ? (
          <UserSignupForm
            toglleCurrentFormType={toglleCurrentFormType}
            closeForm={closeForm}
          />
        ) : (
          <UserLoginForm
            toglleCurrentFormType={toglleCurrentFormType}
            closeForm={closeForm}
          />
        )}
      </>
    )
  );
};

export default UserForm;
