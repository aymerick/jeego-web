var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('nodes', function() {
    this.route('node', { path: ':node_id' });
  });
});

export default Router;
