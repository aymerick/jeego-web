export default Ember.Route.extend({
  model: function() {
    var node = this.modelFor("node");

    return node.get('logs').then(function() {
      return { 'series': [{
        'name': node.get('name'),
        'data': node.get('temperatureSerieData')
      }]};
    });
  }
});
