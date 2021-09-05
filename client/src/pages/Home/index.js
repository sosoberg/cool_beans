import React from "react";

import './style.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Home(props) {

  return (
    <>
      <div className='loader'>
        <Loader
          type="Oval"
          color="black"
          secondaryColor="black"
          height={300}
          width={600}
          timeout={650} //3 secs
        />
      </div>

      <div className='display'>
        <div className='homeImageGridOne'>
          <div className='cropped'>
            <p className='pictureTitle'>Menu</p>
            <img src='../assets/images/coffeeImage.jpg' alt='pouring coffee'/>
          </div>
          <div className='cropped'>
            <p className='pictureTitle'>Contact</p>
            <img className='contactImage' src='../assets/images/contactImage.jpg' alt='contact'/>
          </div>
        </div>
        <div className='cropped2'>
            <p className='pictureTitle2'>Explore</p>
            <img src='../assets/images/matterhorn.jpg' alt='matterhorn'/>
        </div>
      </div>
    </>
  );
}

export default Home;