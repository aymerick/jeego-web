export default Ember.Route.extend({
  model: function(){
    return this.store.find('node');
  }

  // NOTE: seems broken (cf. http://discuss.emberjs.com/t/using-redirect-for-default-child-route-broken-in-1-4/4681)
  //       fixed here: https://github.com/emberjs/ember.js/commit/19ed311952fb85c0921e644a555b9a3ceeeeaab8
  // redirect: function(model) {
  //   return this.transitionTo('node', model.get('firstObject'));
  // }
});
