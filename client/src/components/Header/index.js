import React  from "react";
import { Link } from 'react-router-dom';


import './style.css'

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawers from "../Drawer"

const Header = () => {
    const [state, setState] = React.useState(false);

    const handleOpen = () => {
        setState(true);
    };

    const handleDrawerClose = () => {
        setState(false)
    };

    return (
        <header>
            
            <nav>
                <div className='beanLogo'>
                </div>
                <div>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/products'>Menu</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link className='link' to='/map'>Map</Link>
                </div>
                <div className='signUpNav'>
                    <Link className='link' to='/login'>Log In</Link>
                    <Link className='signUp link' to='/signup'>Join</Link>
                </div>
                <div className='drawer'>
                    <Drawers open={state} handleClose={handleDrawerClose} />
                        <IconButton
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleOpen}
                        >
                        <MenuIcon style={{ color: "white" }} />
                        </IconButton>
                </div>
            </nav>
        </header>
    );
};

export default Header