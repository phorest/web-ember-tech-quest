import { Model, hasMany } from 'miragejs';

export default Model.extend({
  clients: hasMany('client'),
});
