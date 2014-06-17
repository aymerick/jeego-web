export default Ember.Route.extend({
  activate: function() {
    // @todo FIXME !
    JeegoWeb.socket = new WebSocket("ws://127.0.0.1:3000/ws");
    JeegoWeb.socket.onclose = function(evt) {
      Ember.Logger.log("Websocket closed: ", evt);
    };
    JeegoWeb.socket.onmessage = function(evt) {
      Ember.Logger.debug("Websocket message: ", evt.data);
    };
  }
});
