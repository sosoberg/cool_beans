import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

function Contact() {
  return (
    <>
      {/* <div className="loader">
        <Loader
          type="Oval"
          color="black"
          secondaryColor="black"
          height={300}
          width={600}
          timeout={700} //3 secs
        />
      </div> */}
      <div className="contactdisplay">
        <div id="contactContain">
          <div id="bannerContain">
            <div className="contactBanner">
              <h1>Contact Us!</h1>

              <p>
                Feel free to reach out at any time with comments or concerns! If
                you would like to make an order by phone, please contact us with
                the provided number listed below. Otherwise, you can place
                orders on line <Link to="/placeorder">here</Link>. If you are
                looking for hours of operation, those will be listed below.
              </p>
            </div>
            
          </div>
          <div id="infoWraper">
          <div id="infoContain">
            <div className="infoBlocks" id="contactInfo">
              <h1 style={{ fontSize: "20px" }}>Contact</h1>
              <address>
                <div>
                  Phone:{" "}
                  <a id="phoneNumber" href="tel:5093934043">
                    +41 011 41 41 410 04 10
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a id="phoneNumber" href="mailto:coolbeans@gmail.com">
                    koolbeans@gmail.com
                  </a>
                </div>
                <div>
                  Location:{" "}
                  <p>Schluhmattstrasse 130, Zermatt, 3920 Switzerland</p>
                </div>
              </address>
            </div>
            <div className="infoBlocks" id="hoursOfOp">
            <h1 style={{ fontSize: "20px" }}>Business Hours</h1>
              <table>
             
                <tr>
                  <th><h2>Day</h2></th>
                  <th><h2>Open</h2></th>
                  <th><h2>Close</h2></th>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                  <td>Closed</td>
                  
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>06:00</td>
                  <td>17:00</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>06:00</td>
                  <td>17:00</td>
                  
                </tr>
                <tr>
                  <td>Wednessday</td>
                  <td>06:00</td>
                  <td>17:00</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>06:00</td>
                  <td>17:00</td>
                  
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>06:00</td>
                  <td>17:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>08:00</td>
                  <td>13:00</td>
                </tr>
              </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
