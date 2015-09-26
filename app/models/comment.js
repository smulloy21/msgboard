import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  timestamp: DS.attr(),
  username: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
