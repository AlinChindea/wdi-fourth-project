/* global google */

import React from 'react';

class Nearby extends React.Component {

  componentDidMount() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.userMarker,
      zoom: 10
    });

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

    this.cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
      center: this.userMarker,
      radius: 50
    });
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
