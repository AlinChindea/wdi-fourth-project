/* global google */

import React from 'react';

class GoogleMap extends React.Component {

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
        console.log('location found');


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
    console.log('the route can now be drawn');

    this.directionsService  = new google.maps.DirectionsService;
    const directionsDisplay  = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);

    this.directionsService.route({
      origin: this.farmMarker.getPosition(),
      destination: this.userMarker.getPosition(),
      travelMode: 'DRIVING'
    }, function(response, status) {
      status === 'OK' ? directionsDisplay.setDirections(response) : window.alert('Directions request failed due to ' + status);

    });
  }

  componentWillUnmount() {
    // this.marker.setMap(null);
    this.userMarker = null;
    this.farmMarker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}>Google Map goes here...</div>
    );
  }
}

export default GoogleMap;
