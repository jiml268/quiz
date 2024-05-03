import Links from "../../components/NavBar/Links/Links"
import Logo from "../../components/NavBar/Logo/Logo"
import styles from './NavBar.module.css'
function Navbar() {

    return (
        <div className={styles.navbar}>
            <Logo />
            <Links />
        </div>
    )
}

export default Navbar