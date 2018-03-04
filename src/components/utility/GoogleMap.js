/* global google */

import React from 'react';


class GoogleMap extends React.Component {

  state = {
    distance: null,
    duration: null,
    show: true
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
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }, response => {
      const distance = response.rows[0].elements[0].distance.text;
      const duration = response.rows[0].elements[0].duration.text;

      this.setState({ distance, duration });
    });
  }

  handleAlertDismiss = () => {
    this.setState({ show: true });
  }

  handleAlertShow = () => {
    this.setState({ show: false });
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
        {!this.state.show &&
          <div className="alert alert-primary" role="alert">
            {this.state.distance && <p> This farmer is { this.state.distance } away.</p>}
            { this.state.duration && <p>You can drive there in { this.state.duration }.</p>}
            <button className="btn btn-outline-danger btn-sm" onClick={this.handleAlertDismiss}>Hide info</button>
          </div>}
        {this.state.show &&
            <button className="btn btn-outline-primary btn-sm" onClick={this.handleAlertShow}>Show distance</button>}
      </React.Fragment>
    );
  }
}

export default GoogleMap;
