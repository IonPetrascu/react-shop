import React, { useState } from "react";
import styles from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

const UserSignupForm = ({ closeForm, toglleCurrentFormType }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).some((val) => val);
    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className={styles["icon"]}>
          <use xlinkHref={`sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Sign Up</div>
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
            name="name"
            placeholder="Your name"
            type="name"
            value={values.name}
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
        <div className={styles.group}>
          <input
            onChange={handleChange}
            name="avatar"
            placeholder="Your avatar"
            type="avatar"
            value={values.avatar}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.link} onClick={()=> toglleCurrentFormType('login')}>
          I already have an account
        </div>
        <button className={styles.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
