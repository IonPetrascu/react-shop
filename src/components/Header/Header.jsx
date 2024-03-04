import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";

import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import Logo from "../../images/logo.svg";
import Avatar from "../../images/avatar.jpg";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    } else {
      navigate(ROUTES.PROFILE);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.userName}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref="../../../public/sprite.svg" />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              autoComplete="off"
              placeholder="Search for anyting..."
              onChange={() => {}}
              value={""}
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          {" "}
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
