import React from 'react';
import { Link } from 'react-router-dom'; // Zorg ervoor dat react-router-dom is geïnstalleerd en geconfigureerd
import styles from './Navigatiebar.module.css';
import mh from '../../assets/mh.png';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logoLink}>
                <img src={mh} alt="Logo" className={styles.logo} />
            </Link>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/product-ondernemer">Productondernemer</Link>
                </li>
                <li>
                    <Link to="/markt-ondernemer">Marktondernemer</Link>
                </li>
                <li>
                    <Link to="/login">Inloggen</Link>
                </li>
                <li>
                    <Link to="/aanmelden">Profiel maken</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
