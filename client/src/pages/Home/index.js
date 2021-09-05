import React from "react";
import './style.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import {useApolloClient} from "@apollo/client";
import {Link} from "react-router-dom"
function Home() {
 
  
 

  return (
    <>
      {/* <div className='loader'>
        <Loader
          type="Oval"
          color="black"
          secondaryColor="black"
          height={300}
          width={600}
          timeout={650} //3 secs
        />
      </div> */}

      <div className='display'>
        <div className='homeImageGridOne'>
          <Link to="/products" className='cropped'>
            <p className='pictureTitle'>Menu</p>
            <img src='../assets/images/coffeeImage.jpg' alt='pouring coffee'/>
          </Link>
          <Link to="/contact" className='cropped'>
            <p className='pictureTitle'>Contact</p>
            <img className='contactImage' src='../assets/images/contactImage.jpg' alt='contact'/>
          </Link>
        </div>
        <Link to="/map">
        <div className='cropped2'>
            <p className='pictureTitle2'>Explore</p>
        </div>
        </Link>
      </div>
    </>
  );
}

export default Home;