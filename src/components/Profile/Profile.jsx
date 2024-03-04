import React, { useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
import style from "../../styles/User.module.css";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).some((val) => val);
    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  };

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.group}>
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
          <div className={style.group}>
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
          <div className={style.group}>
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
          <div className={style.group}>
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

          <button className={style.submit} type="submit">
            Update
          </button>
        </form>
      )}
    </section>
  );
};

export default Profile;
