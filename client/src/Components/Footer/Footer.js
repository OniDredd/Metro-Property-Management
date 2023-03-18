import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import locationicon from '../../Assets/locationicon.svg'

const Footer = () => {
    return ( 
        <section className={ styles.footer_container }>
            <div className={ styles.left_side_block }>
                <div className={ styles.footer_nav_block }>
                    <h2>Tenants</h2>
                    <Link to='/Property' className={ styles.footerlink }>View Property's</Link>
                    <Link to='/Property' className={ styles.footerlink }>Search</Link>
                    <Link to='/Property' className={ styles.footerlink }>Rules</Link>
                    <Link to='/Property' className={ styles.footerlink }>Purchasing Process</Link>
                </div>
                <div className={ styles.footer_nav_block }>
                    <h2>Help</h2>
                    <Link to='/Property' className={ styles.footerlink }>Call Us</Link>
                    <Link to='/Property' className={ styles.footerlink }>Visit Us</Link>
                    <Link to='/Property' className={ styles.footerlink }>Rules</Link>
                </div>
                <div className={ styles.footer_nav_block }>
                    <h2>Services</h2>
                    <Link to='/Property' className={ styles.footerlink }>Terms of Use</Link>
                    <Link to='/Property' className={ styles.footerlink }>Disclaimers</Link>
                    <Link to='/Property' className={ styles.footerlink }>Privacy Policy</Link>
                    <Link to='/Property' className={ styles.footerlink }>Property Act 1991</Link>
                </div>
                <div className={ styles.footer_nav_block }>
                    <h2>About</h2>
                    <Link to='/Property' className={ styles.footerlink }>About Us</Link>
                    <Link to='/Property' className={ styles.footerlink }>Why choose MPM</Link>
                    <Link to='/Property' className={ styles.footerlink }>Careers</Link>
                    <Link to='/Property' className={ styles.footerlink }>Contact Us</Link>
                </div>
            </div>
            <div className={ styles.seperator } />
            <div className={ styles.right_side_block }>
                <h2>Subscribe to our Newsletter</h2>
                <div className={ styles.email_input }>
                   <input  type='text' placeholder='' />
                   <button>Search</button>
                </div>
                <div className={ styles.socialmedia_container }>
                    
                </div>
                <div className={ styles.location_container }>
                    <img src={ locationicon } alt="" />
                    <p>
                        Level 33, ANZ Centre, 23-29 Albert St,
                        <br/>
                        Auckland 1010, New Zealand</p>
                </div>
                <div className={ styles.copyright_container }>
                    <p>© 2022 Metro NZ Property Management | Disputes Process</p>
                </div>
                
            </div>
        </section>
     );
}
 
export default Footer;