import Ember from 'ember';
import Node from './models/node';

var Router = Ember.Router.extend({
  location: JeegoWebENV.locationType
});

Router.map(function() {
  this.resource('nodes', function() {
    this.resource('node', { path: '/:node_id' }, function() {
      Node.SENSORS.forEach(function(sensor) {
        this.route(sensor);
      }, this);
    });
  });
});

export default Router;
