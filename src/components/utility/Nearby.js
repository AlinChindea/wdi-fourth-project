/* global google */

import React from 'react';

class Nearby extends React.Component {
  state = {
    farmers: []
  }

  componentDidMount() {
    const radiusMetres = 90000;
    let pos = {};
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(this.mapCanvas, {
      center: {lat: 51.509865, lng: -0.118092},
      zoom: 10
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const image = '../assets/man.png';
        this.userMarker = new google.maps.Marker({
          map: this.map,
          position: pos,
          icon: image,
          animation: google.maps.Animation.BOUNCE
        });

        this.map.setCenter(pos);

        this.farmerCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#6c757d',
          fillOpacity: 0.35,
          map: this.map,
          center: this.userMarker.getPosition(),
          radius: radiusMetres
        });

        this.bounds.extend(this.userMarker.getPosition());


        this.props.farmers.forEach( (farmer) => {
          const farmerLatLng = new google.maps.LatLng(farmer.location);
          const userLatLng = new google.maps.LatLng(pos);
          const distance = google.maps.geometry.spherical.computeDistanceBetween(farmerLatLng, userLatLng);
          if(distance > radiusMetres) return false;

          this.setState((prevState) => {
            return {farmers: [...prevState, farmer]};
          }, () => {
            this.state.farmers.forEach( (farmer, index) => {
              const infowindow = new google.maps.InfoWindow({
                content: 'Hi, I am a farmer'
              });
              const farmerIcon = '../assets/farmer.png';
              this[`farmMarker${index}`] = new google.maps.Marker({
                map: this.map,
                position: farmer.location,
                icon: farmerIcon,
                animation: google.maps.Animation.DROP
              });
              this[`farmMarker${index}`].addListener('click', function() {
                infowindow.open(this.map, this[`farmMarker${index}`]);
              });
              this.bounds.extend(this[`farmMarker${index}`].getPosition());
              this.map.fitBounds(this.bounds);
              this.map.setZoom(8);
            });
          });
        });
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
