import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import styles from './Logo.module.css'

function Logo() {

    return (
        <>
        
         <Link to="/">
                <button className={styles.logoButton}><img src={logo} alt="Logo" className={styles.logo} /></button>
            </Link>
        </>
    )
}

export default Logo