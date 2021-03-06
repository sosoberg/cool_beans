import React, { Component, ComponentDidMount } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './style.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// import GoogleSearch from '../../components/GoogleSearch';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const openSearch = () => {
  document.getElementById("eventAside").classList.remove('eventAside');
  document.getElementById("eventAside").classList.add('eventAside2');
  document.getElementById("openBtn").style.display = 'none'

}

const closeSearch = () => {
  document.getElementById("eventAside").classList.remove('eventAside2');
  document.getElementById("eventAside").classList.add('eventAside');

  document.getElementById("openBtn").style.display = 'block'
}

const KoolBeansMarker = ({ text }) => 
  <button style={{
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
  </button>

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

  state = {
    lat: "",
    lon: ""
  }
  
  componentDidMount(){
    if (!navigator.geolocation){
      console.log("Geolocation is not supported by your browser");
       return;
     }else{
      window.navigator.geolocation.getCurrentPosition((position) => {
        let mylat = position.coords.latitude
        let mylon = position.coords.longitude
        this.setState({lat: mylat, lon: mylon})
        console.log(position.coords.latitude, position.coords.longitude);
      });
     }
  }
  static defaultProps = {
    center: {
      lat: 46.01255,
      lng: 7.74276
    },
    zoom: 15
  };

  render() {

    const title = 'Kool Beans'
    const schaferstube = 'Sch??ferstube'
    const gornergrat = 'Gornergrat Railway'
    const viewPoint = 'Matterhorn View Point'

    return (
      // Important! Always set the container height explicitly
        <>
            <div className='loader'>
                <Loader
                    type="Oval"
                    color="black"
                    secondaryColor="black"
                    height={300}
                    width={600}
                    timeout={700} //3 secs
                    />
            </div>
          
            <div className='display'>
                <div id="map">
                    <div style={{ height: '85vh', width: '100%' }}>
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
                       <LocationOnIcon
                       lat={this.state.lat}
                       lng={this.state.lon}
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
                <aside className="eventAside" id='eventAside'>
                  <div>
                    <h3 className='eventHeader'>Nearby Events</h3>
                  </div>
                  <button className='closeBtn' onClick={closeSearch}><ArrowBackIosIcon /></button>
                  <button className='openBtn' id='openBtn' onClick={openSearch}><ArrowForwardIosIcon /></button>
                </aside>
                
            </div>
        </>
    );
  }
}

export default Map;