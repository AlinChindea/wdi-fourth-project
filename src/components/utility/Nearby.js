/* global google */

import React from 'react';

class Nearby extends React.Component {

  componentDidMount() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.userMarker,
      zoom: 10
    });

    // this.farmMarker = new google.maps.Marker({
    //   map: this.map,
    //   position: this.props.center,
    //   animation: google.maps.Animation.DROP
    // });
    //
    // this.bounds.extend(this.farmMarker.getPosition());

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

        this.farmerCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: this.map,
          center: this.userMarker.getPosition(),
          radius: 25000
        });

        this.bounds.extend(this.userMarker.getPosition());
        this.map.fitBounds(this.bounds);
      });
    }


  }
  componentWillUnmount() {
    // this.marker.setMap(null);
    this.userMarker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="googlemap" ref={element => this.mapCanvas = element}>Google Map goes here...</div>
    );
  }
}

export default Nearby;
