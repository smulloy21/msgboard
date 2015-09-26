import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['timestamp:desc'],
  commentsSorted: Ember.computed.sort('model', 'mostRecent'),
});
