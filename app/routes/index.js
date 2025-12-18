import Route from '@ember/routing/route';
import { redirect } from '@ember/routing';

export default class IndexRoute extends Route {
  redirect() {
    this.transitionTo('clients');
  }
}
