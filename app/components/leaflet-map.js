import Ember from 'ember';
import Config from '../config/environment';
import Places from '../data/CulturalSpaces';

export default Ember.Component.extend({

  map: null,
  didInsertElement: function(x){
    let lat = this.place.get('latitiude'),
        lon = this.place.get('longitude');
    this.map = L.map('map').setView([lat, lon], 13);

    L.Icon.Default.imagePath = 'images';

    //Places.forEach(function(place, index){
    //    let lat = +place['latitiude'],
    //        lon = +place['longitude'],
    //        newIndex = index+1;
    //    let marker = L.marker([lat, lon]).addTo(map);
    //    marker.bindPopup("<a href="+newIndex+">"+place['name']+"</a>").openPopup();
    //  });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+Config.mapBoxToken, {
      //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: Config.mapBoxId,
      accessToken: Config.mapBoxToken
    }).addTo(this.map);
  },

  addMarker: function(){
    let lat = this.place.get('latitiude'),
      lon = this.place.get('longitude'),
      id = this.place.get('id'),
      name = this.place.get('name');
    let marker = L.marker([lat, lon]).addTo(this.map);
    marker.bindPopup("<a href=/"+id+">"+name+"</a>").openPopup();
  }.observes('place')
});
