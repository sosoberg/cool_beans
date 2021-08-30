import React from "react";

import './style.css'

function Home() {
  return (
    <>
      <div>
          <p>Home</p>
      </div>
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
    </>
  );
}

export default Home;