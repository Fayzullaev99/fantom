import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { RiMenu2Fill } from 'react-icons/ri';
import classNames from 'classnames';
import Container from '../../layout/container'
import logo from '../../images/logo.svg';
import styles from './navbar.module.scss';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const asideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  function changeLang(params) {

  }

  return (
    <nav className={styles.navbar}>
      <Container className={styles.navbar__container}>
        <button className={styles.navbar__bars} onClick={showSidebar}>
          <RiMenu2Fill />
        </button>
        <Link to="/" className={styles.navbar__logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.navbar__box}>
          <select className={styles.navbar__language} onChange={(e) => changeLang(e.target.value)}>
            <option value="en" className={styles.navbar__lang}>EN</option>
            <option value="ru" className={styles.navbar__lang}>RU</option>
            <option value="uz" className={styles.navbar__lang}>UZ</option>
          </select>
        </div>
        {sidebar && (
          <aside className={styles.navbar__aside} ref={asideRef}>
            <button className={styles.navbar__close} onClick={showSidebar}>
              <MdClose />
            </button>
            <Link to={"/"}>
              <img src={logo} alt="brand" className={styles.navbar__brand} />
            </Link>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classNames(styles.navbar__link, styles.navbar__link_active) : styles.navbar__link
              }
            >
              Home page
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? classNames(styles.navbar__link, styles.navbar__link_active) : styles.navbar__link
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classNames(styles.navbar__link, styles.navbar__link_active) : styles.navbar__link
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? classNames(styles.navbar__link, styles.navbar__link_active) : styles.navbar__link
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classNames(styles.navbar__link, styles.navbar__link_active) : styles.navbar__link
              }
            >
              Contact
            </NavLink>
          </aside>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
