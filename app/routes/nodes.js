import Node from "jeego-web/models/node";

var NodesRoute = Ember.Route.extend({
  model: function(){
    // return this.store.find('node');
    return Node.FIXTURES;
  }
});

export default NodesRoute;
