import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    showAddComment() {
      this.set('addComment', true);
    },
    hideAddComment() {
      this.set('addComment', false);
    },
    saveComment() {
      if (this.get('text')!=="" && this.get('username')!=="" && this.get('text')!==undefined && this.get('username')!==undefined) {
        var params = {
          text: this.get('text'),
          username: this.get('username'),
          question: this.get('model'),
          timestamp: new Date(),
        };
        this.set('text', '');
        this.set('username', '');
        this.set('addComment', false);
        this.sendAction('saveComment', params);
      }
    }
  }
});
