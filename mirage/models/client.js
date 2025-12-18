import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  primaryProject: belongsTo('project'),
});
