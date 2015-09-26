import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['timestamp:desc'],
  questionsSorted: Ember.computed.sort('model', 'mostRecent'),
});
