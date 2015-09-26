import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      if (this.get('title')!=="" && this.get('text')!=="" && this.get('username')!=="" && this.get('title')!==undefined && this.get('text')!==undefined && this.get('username')!==undefined) {
        var params = {
          title: this.get('title'),
          text: this.get('text'),
          username: this.get('username'),
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/DYK_questionmark_icon.png/105px-DYK_questionmark_icon.png",
          timestamp: new Date(),
        };
        this.sendAction('saveQuestion', params);
      }
    }
  }
});
