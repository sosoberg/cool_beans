import React from "react";

import './style.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Contact() {
  return (
    <>
      <div className='loader'>
        <Loader
          type="Bars"
          color="black"
          secondaryColor="black"
          height={300}
          width={600}
          timeout={700} //3 secs
        />
      </div>
      <div className='display'>
        <div className="contactBanner">
            
        </div>
      </div>
    </>
    
  );
}

export default Contact;