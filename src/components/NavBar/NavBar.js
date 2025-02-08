import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar =() => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <span className="fa fa-tasks"></span>
                </a>
                <ul className={styles.menu}>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;