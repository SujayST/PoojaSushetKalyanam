import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Navbar= (props) => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <nav className="navbar" >
                <div className="nav1">
                    <div style={{margin: "20px", right: "0", marginLeft: "70%"}}>
                        <Button variant="contained" endIcon={<SendIcon />} color="success" style={{color:"white", backgroundColor: "black"}}  onClick={(e) => {
                            window.open('https://forms.office.com/r/BKC1VkSU2B', '_blank')
                        }}>
                            Feedback
                        </Button>
                    </div>
                    
                </div>
                
            </nav>

        </Fragment>
    )
}


export default Navbar;