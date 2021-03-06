import React from 'react';
import ReactDOM from 'react-dom';

let google = '';

export default class GoogleSearch extends React.Component {
    static propTypes = {
      placeholder: React.PropTypes.string,
      onPlacesChanged: React.PropTypes.func
    }
    render() {
      return <input ref="input" {...this.props} type="text"/>;
    }
    onPlacesChanged = () => {
      if (this.props.onPlacesChanged) {
        this.props.onPlacesChanged(this.searchBox.getPlaces());
      }
    }
    componentDidMount() {
      var input = ReactDOM.findDOMNode(this.refs.input);
      this.searchBox = new google.maps.places.SearchBox(input);
      this.searchBox.addListener('places_changed', this.onPlacesChanged);
    }
    componentWillUnmount() {
      // https://developers.google.com/maps/documentation/javascript/events#removing
      google.maps.event.clearInstanceListeners(this.searchBox);
    }
  }