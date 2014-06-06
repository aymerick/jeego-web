export default DS.Transform.extend({
  serialize: function(value) {
    return moment(value).toISOString();
  },
  deserialize: function(value) {
    return moment(value).toDate();
  }
});
