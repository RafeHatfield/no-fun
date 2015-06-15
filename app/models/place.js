import DS from 'ember-data';
import Places from '../data/CulturalSpaces';

var Place = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  url: DS.attr('string'),
  neighbourhood: DS.attr('string'),
  type: DS.attr('string'),
  primary_use: DS.attr('string'),
  ownership: DS.attr('string'),
  active_space: DS.attr('string'),
  area: DS.attr('number'),
  capacity: DS.attr('number'),
  longitude: DS.attr('number'),
  latitiude: DS.attr('number')
});

Place.reopenClass({
  FIXTURES: Places
});


export default Place;
