import React from 'react';
import styles from '../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import Logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Stuff" />
        </Link>
      </div>
      <div className={styles.rights}>Developed by IonPetrascu</div>
      <div className={styles.socials}>
        <a href="http://instagram.com" target="_blank">
          <svg className={styles['icon']}>
            <use xlinkHref={`sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="http://facebook.com" target="_blank">
          <svg className={styles['icon']}>
            <use xlinkHref={`sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="http://youtube.com" target="_blank">
          <svg className={styles['icon']}>
            <use xlinkHref={`sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
