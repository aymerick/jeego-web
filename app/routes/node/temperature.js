export default Ember.Route.extend({
  model: function() {
    var node = this.modelFor("node");

    if (!Ember.isNone(node.get('logs'))) {
      return { 'series': [{
        'name': node.get('name'),
        'data': node.temperatureSerieData()
      }]};
    }
    else {
      return node.loadLogs().then(function(){
        return { 'series': [{
          'name': node.get('name'),
          'data': node.temperatureSerieData()
        }]};
      });
    }
  }
});
