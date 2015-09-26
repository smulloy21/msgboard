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
    update(question) {
      var params = {
        title: this.get('title'),
        text: this.get('text')
      };
      this.set('editMe', false);
      this.sendAction('update', question, params);
    },
    delete(question) {
      this.set('editMe', false);
      this.sendAction('delete', question);
    }
  }
});
