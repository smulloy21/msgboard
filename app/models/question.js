import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  timestamp: DS.attr(),
  image: DS.attr(),
  username: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
