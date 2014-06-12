export default Ember.Route.extend({
  model: function() {
    var node = this.modelFor("node");
    var self = this;

    if (node.get('isMissingLogs')) {
      return node.loadLogs().then(function(){
        return self._series(node);
      });
    }
    else {
      return this._series(node);
    }
  },

  _series: function(node) {
    return { 'series': [{
      'name': node.get('name'),
      'data': node.get('temperatureSerieData')
    }]};
  }
});
