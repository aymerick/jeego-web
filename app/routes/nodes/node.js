import Node from "jeego-web/models/node";

var NodeRoute = Ember.Route.extend({
  model: function(params){
    // return this.store.find('node', params.node_id);

    return Node.FIXTURES.findBy('id', params.node_id);
  }
});

export default NodeRoute;
