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
            <h1>Cool_Beans</h1>
            <nav>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/contact'>Contact</Link>
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