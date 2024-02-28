import React from 'react';
import styles from '../../styles/Header.module.css';

import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import Logo from '../../images/logo.svg';
import Avatar from '../../images/avatar.jpg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${Avatar})` }} />
          <div className={styles.userName}>Guest</div>
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
              value={''}
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          {' '}
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
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
