import styles from './Links.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from "../../../redux/user/userSelectors";
import { setIsLoggedIn } from "../../../redux/user/userSlice";
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { resetTest, resetState}
    from '../../../redux/quiz/quizSlice'

     

function Links() {   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentLoggedIn = useSelector(getIsLoggedIn)
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [optionPicked, setoptionPicked] = useState("")
    


    const handleClickOpen = (e) => {
        setoptionPicked(e.currentTarget.value)
        const processOption = e.currentTarget.value
        if (location.pathname === "/questions") {
            setOpen(true);
        } else {
        processClick(processOption)
        }
  };

    const handleClose = (e) => {
      setOpen(false);
        if (e.currentTarget.value === "Agree") {
            const processOption = e.currentTarget.name
         processClick(processOption)
           
      }
  };


    const processClick = (processOption) => {
 if (location.pathname === "/questions") {
                    dispatch(resetTest())
                }
        switch (processOption) {
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
                dispatch(resetState())
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
                <button className={styles.linkButtons} onClick={handleClickOpen} value={"signIn"}>
                    Sign In
                </button>
                 <button className={styles.linkButtons} onClick={handleClickOpen} value={"registration"}>
                    registration
                </button>
                
            </div> :
                <div>
                   <button className={styles.linkButtons} onClick={handleClickOpen} value={"logoff"}>
                    Log out
                    </button>
                <button className={styles.linkButtons} onClick={handleClickOpen} value={"HighScores"}>
                    High Scores
                </button>    
                  
                </div>
            }
             <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Void current Quiz"}</DialogTitle>
                <DialogContent>
                    {optionPicked === "logoff" ?
                        <DialogContentText id="alert-dialog-description">
                            This opition will cause you to exit the current quiz.  All answre will be lost.  Do you want to proceed?
                        </DialogContentText> :
                        <DialogContentText id="alert-dialog-description">
                            This opition will cause your current Quiz to restart .  All answre will be lost.  Do you want to proceed?
                        </DialogContentText>
                    }
        </DialogContent>
                <DialogActions>
          <Button onClick={handleClose} value= "Disagree" color="primary">
            Disagree
          </Button>
                    <Button onClick={handleClose} name={optionPicked}  value= "Agree" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )



}

export default Links