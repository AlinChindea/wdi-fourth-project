/* global google */

import React from 'react';

class Nearby extends React.Component {

  componentDidMount() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(this.mapCanvas, {
      center: {lat: 51.509865, lng: -0.118092},
      zoom: 10
    });

    this.props.farmers.forEach( (farmer, index) => {
      const farmerIcon = '../assets/farmer.png';
      this[`farmMarker${index}`] = new google.maps.Marker({
        map: this.map,
        position: farmer.location,
        icon: farmerIcon,
        animation: google.maps.Animation.DROP
      });
      this.bounds.extend(this[`farmMarker${index}`].getPosition());
    });


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const image = '../assets/man.png';
        this.userMarker = new google.maps.Marker({
          map: this.map,
          position: pos,
          icon: image,
          animation: google.maps.Animation.DROP
        });

        this.map.setCenter(pos);

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
    // console.log('farmers inside Nearby', this.props.farmers);

    return (
      <div className="googlemap" ref={element => this.mapCanvas = element}>Google Map goes here...</div>
    );
  }
}

export default Nearby;
