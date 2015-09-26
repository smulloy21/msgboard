import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['timestamp:asc'],
  commentsSorted: Ember.computed.sort('model', 'mostRecent'),
  actions: {
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
