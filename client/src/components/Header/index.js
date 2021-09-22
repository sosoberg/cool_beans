import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {setLoginState} from "../../redux/userReducers"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawers from "../Drawer";
import { useSelector, useDispatch } from "react-redux";
import {CURRENT_USER, GET_CACHED_CART} from "../../graphQL/api/querys"
import {useLazyQuery} from "@apollo/client"
import { Hidden } from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Header = () => {
//  setting up dispatch
    const dispatch = useDispatch()
//  Selector to check if user is logged in.
  const loggedIn = useSelector((state) => state.Store.User.loggedIn);
  const [state, setState] = React.useState(false);
//  GraphQL method to check if user is logged in
  const[getUser, {loading, error, data}] = useLazyQuery(CURRENT_USER);

  const handleOpen = () => {
    setState(true);
  };

  const handleDrawerClose = () => {
    setState(false);
  };

  useEffect(() => {
     getUser()
  }, [])
  const logOut = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

// if error, cut off private access
if(error){
    console.log(error)
}
// if data, keep private access on refresh
if(data){
  console.log(data)
    dispatch(setLoginState({
    userName: data.me.username,
      loggedIn: true
      
    }))
   
}

  return (
    
      <nav>
        <div className="beanLogo"></div>
        <Hidden smDown>
        <div className="linksContain">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/products">
            Menu
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <Link className="link" to="/map">
            Map
          </Link>
          {/* If loggedIn then desplay */}
          {loggedIn ? (
            <>
            
            <Link className="link" to="/order">
              Order-Online
            </Link>
            <Link to="/cart">
            <ShoppingCartIcon/>
            </Link>
            </>
          ) : (
            <></>
          )}
        </div>
        </Hidden>
        <Hidden smDown>
        <div className="signUpNav">
        {/* If loggedIn then dont desplay */}
          {!loggedIn ? (
            <>
            
              <Link className="link" to="/login">
                Log In
              </Link>
              
              
              <Link className="signUp link" to="/signup">
                Join
              </Link>
              
            </>
          ) : (
            <button onClick={logOut} className="signUp link">Logout</button>
          )}
        </div>
        </Hidden>
        <Hidden mdUp>
        <div className="drawer">

          <Drawers open={state} handleClose={handleDrawerClose} />
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpen}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
        </div>
        </Hidden>
      </nav>
    
  );
};

export default Header;
