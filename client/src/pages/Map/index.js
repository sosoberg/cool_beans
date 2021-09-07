import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './style.css'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

// import GoogleSearch from '../../components/GoogleSearch';

const openSearch = () => {
  document.getElementById('eventAside').style.display = 'block'
}

const closeSearch = () => {
  document.getElementById('eventAside').style.display = 'none'
}

const KoolBeansMarker = ({ text }) => 
  <div style={{
    color: 'white', 
    fontSize: '15px',
    fontWeight: 'bold',
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

const EventMarker = ({ text }) => 
  <div style={{
    color: 'black', 
    fontSize: '10px',
    background: 'white',
    padding: '10px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    border: 'solid',
    borderColor: 'black',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 46.01255,
      lng: 7.74276
    },
    zoom: 15
  };

  render() {

    const title = 'Kool Beans'
    const schaferstube = 'Schäferstube'
    const gornergrat = 'Gornergrat Railway'
    const viewPoint = 'Matterhorn View Point'

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
                    <div style={{ height: '98vh', width: '100%' }}>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCUXkG-5a5cdEyPP2Ki6sg-0Ckc9qz06W8" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <KoolBeansMarker
                            lat={46.01255}
                            lng={7.74276}
                            text={title}
                        />
                        <EventMarker
                            lat={46.01849}
                            lng={7.74885}
                            text={schaferstube}
                        />
                        <EventMarker
                            lat={46.02364}
                            lng={7.74778}
                            text={gornergrat}
                        />
                        <EventMarker
                            lat={46.02576}
                            lng={7.75627}
                            text={viewPoint}
                        />
                        </GoogleMapReact>
                    </div>
                </div>
                <aside id='eventAside'>

                  <button className='closeBtn' onClick={closeSearch}>Close</button>
                </aside>
                <button onClick={openSearch}>Open</button>
            </div>
        </>
    );
  }
}

export default Map;