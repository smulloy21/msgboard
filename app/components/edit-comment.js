import Ember from 'ember';

export default Ember.Component.extend({
  editMe: false,
  actions: {
    showEditMe() {
      this.set('editMe', true);
    },
    hideEditMe() {
      this.set('editMe', false);
    },
    updateComment(comment) {
      var params = {
        text: this.get('text')
      };
      this.set('editMe', false);
      this.sendAction('updateComment', comment, params)
    },
    deleteComment(comment) {
      this.set('editMe', false); 
      this.sendAction('deleteComment', comment)
    }
  }
});
