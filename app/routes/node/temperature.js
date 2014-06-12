export default Ember.Route.extend({
  model: function() {
    var node    = this.modelFor("node");
    var adapter = this.store.adapterFor('node');
    var url     = adapter.get('host');

    if (!Ember.isEmpty(adapter.get('namespace'))) {
      url += '/' + adapter.get('namespace');
    }

    url += '/nodes/' + node.get('id') + '/temperatures';

    // @todo Setup a hasMany relationship on a new Log model, with a computed filter to get all temperatures logs
    return $.getJSON(url).then(function(data) {
      return { 'series': [{
        'name': node.get('name'),
        'data': data.temperatures.map(function(dataPoint){
          return [ Date.parse(dataPoint[0]), parseFloat(dataPoint[1]) ];
        })
      }]};
    });
  }
});
