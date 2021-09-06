import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './style.css'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

// import GoogleSearch from '../../components/GoogleSearch';

const KoolBeansMarker = ({ text }) => 
  <div style={{
    color: 'white', 
    background: 'black',
    padding: '15px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>

const MountainMarker = ({ text }) => 
  <div style={{
    color: 'black', 
    background: 'white',
    padding: '5px 5px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 46.0207,
      lng: 7.7491
    },
    zoom: 12
  };

  render() {

    const title = 'Kool Beans'
    const gornergrat = 'Gornergrat'

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
                        <KoolBeansMarker
                            lat={46.0207}
                            lng={7.7491}
                            text={title}
                        />
                        <MountainMarker
                            lat={45.9835}
                            lng={7.7847}
                            text={gornergrat}
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