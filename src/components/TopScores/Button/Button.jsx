import styles from './Button.module.css'
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();

    const exitClicked = () => {
       navigate(-1)  
    }

    return (<>
         <button className={styles.button} onClick={exitClicked}> 
         Exit</button>
    </>)
}

export default Buttons