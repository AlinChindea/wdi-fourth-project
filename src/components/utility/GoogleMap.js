/* global google */

import React from 'react';

class GoogleMap extends React.Component {
  state = {
    distance: null,
    duration: null
  }

  componentDidMount() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center,
      zoom: 10
    });

    this.farmMarker = new google.maps.Marker({
      map: this.map,
      position: this.props.center,
      animation: google.maps.Animation.DROP
    });

    this.bounds.extend(this.farmMarker.getPosition());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };


        this.userMarker = new google.maps.Marker({
          map: this.map,
          position: pos,
          animation: google.maps.Animation.DROP
        });

        this.bounds.extend(this.userMarker.getPosition());
        this.map.fitBounds(this.bounds);

        if (this.userMarker && this.farmMarker) {
          this.drawRoute();
        }
      });
    }
  }

  drawRoute = () => {
    this.directionsService  = new google.maps.DirectionsService;
    const directionsDisplay  = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);
    this.distanceCalculator = new google.maps.DistanceMatrixService;

    this.directionsService.route({
      origin: this.userMarker.getPosition(),
      destination: this.farmMarker.getPosition(),
      travelMode: 'DRIVING'
    }, function(response, status) {
      status === 'OK' ? directionsDisplay.setDirections(response) : window.alert('Directions request failed due to ' + status);
    });

    this.distanceCalculator.getDistanceMatrix({
      origins: [this.userMarker.getPosition()],
      destinations: [this.farmMarker.getPosition()],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC
    }, response => {
      const distance = response.rows[0].elements[0].distance.text;
      const duration = response.rows[0].elements[0].duration.text;

      this.setState({ distance, duration });
    });
  }

  componentWillUnmount() {
    this.userMarker = null;
    this.farmMarker = null;
    this.map = null;
  }

  render() {
    return (
      <React.Fragment>
        <div className="google-map" ref={element => this.mapCanvas = element}>Google Map goes here...</div>
        { this.state.duration && <p>{ this.state.duration }</p>}
        { this.state.distance && <p>{ this.state.distance }</p>}
      </React.Fragment>
    );
  }
}

export default GoogleMap;
