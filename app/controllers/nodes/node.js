export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editNode: function() {
      this.set('isEditing', true);
    },

    acceptChanges: function() {
      this.set('isEditing', false);

      this.get('model').save();
    }
  }
});
