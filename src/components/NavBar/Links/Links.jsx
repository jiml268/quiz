import styles from './Links.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from "../../../redux/user/userSelectors";
import { setIsLoggedIn } from "../../../redux/user/userSlice";
function Links() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentLoggedIn = useSelector(getIsLoggedIn)
    
    const processClick = (e) => {
        e.preventDefault();
        const { value } = e.target;
        switch (value) {
            case 'signIn':
                navigate("/login");
                break
            case 'registration':
                navigate("/register");
                break
            case 'HighScores':
                navigate("/topscores");
                break
            case 'logoff':
                dispatch(setIsLoggedIn(false))
                navigate("/");
                break
            default:
                navigate("/");
                break
        }
    }
    return (
        <>
            {!currentLoggedIn ? <div className={styles.links}>
                <button className={styles.linkButtons} onClick={processClick} value={"signIn"}>
                    Sign In
                </button>
                 <button className={styles.linkButtons} onClick={processClick} value={"registration"}>
                    registration
                </button>
                
            </div> :
                <div>
                   <button className={styles.linkButtons} onClick={processClick} value={"logoff"}>
                    Log out
                    </button>
                <button className={styles.linkButtons} onClick={processClick} value={"HighScores"}>
                    High Scores
                </button>    
                  
                </div>
            }
        </>
    )



}

export default Links