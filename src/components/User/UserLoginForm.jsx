import React, { useState } from "react";
import styles from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const UserLoginForm = ({ closeForm, toglleCurrentFormType }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).some((val) => val);
    if (!isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className={styles["icon"]}>
          <use xlinkHref={`sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Log In</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            onChange={handleChange}
            name="email"
            placeholder="Your email"
            type="email"
            value={values.email}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.group}>
          <input
            onChange={handleChange}
            name="password"
            placeholder="Your password"
            type="password"
            value={values.password}
            autoComplete="off"
            required
          />
        </div>

        <div
          className={styles.link}
          onClick={() => toglleCurrentFormType("signup")}
        >
          Create an account
        </div>
        <button className={styles.submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
