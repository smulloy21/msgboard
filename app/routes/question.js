import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    delete(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveComment(params) {
      console.log('got to question route handler');
      var newComment = this.store.createRecord('comment', params);
      var question = params.question;
      question.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
