var NodeRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('node', params.node_id);
  }
});

export default NodeRoute;
