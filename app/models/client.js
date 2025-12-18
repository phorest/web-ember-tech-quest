import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClientModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') email;
  @attr('number') age;
  @attr('boolean') vip;
  @belongsTo('project', { async: false, inverse: null }) primaryProject;
}
