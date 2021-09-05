import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './style.css'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

const AnyReactComponent = ({ text, marker }) => <div className="markerDiv">{marker} {text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 46.0207,
      lng: 7.7491
    },
    zoom: 30
  };

  render() {

    const title = 'KoolBeans'

    return (
      // Important! Always set the container height explicitly
        <>
            {/* <div className='loader'>
                <Loader
                    type="Oval"
                    color="black"
                    secondaryColor="black"
                    height={300}
                    width={600}
                    timeout={700} //3 secs
                    />
            </div> */}
            <div className='display'>
                <div id="map">
                    <div style={{ height: '91.5vh', width: '100%' }}>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCUXkG-5a5cdEyPP2Ki6sg-0Ckc9qz06W8" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={46.0207}
                            lng={7.7491}
                            marker="^"
                            text={title}
                        />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </>
    );
  }
}

export default Map;