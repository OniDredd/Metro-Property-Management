import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
// import { useState } from 'react';
import logo from '../../Assets/logo.svg'
// import { FaBars,FaTimes } from "react-icons/fa";


const Navbar = () => {

    // const [isMobile, setIsMobile] = useState(false);

    return(
        <header className={ styles.navigation }>
            <img src={logo} alt="" />
            <nav className={ styles.nav_link_desktop}>
                    <NavLink className={ styles.navlink } to="/">Home</NavLink>
                    <NavLink className={ styles.navlink } to="/Property">Listings</NavLink>
                    <NavLink className={ styles.navlink } to="/">News</NavLink>
                    <NavLink className={ styles.navlink } to="/">About</NavLink>
                    <NavLink className={ styles.navlink } to="/">Contact</NavLink>
                    <p>09 319 4642</p>
                    {/* <button className={styles.mobile_menu_icon}>
                        {isMobile ? (
                            <i className='fas fa-times' />
                        ) : (
                            <i className='fas fa-times' />
                        )}
                    </button> */}
            </nav>
        </header>
      );
}
 
export default Navbar;