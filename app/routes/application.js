import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    const projects = await this.store.findAll('project');
    return { projects };
  }
}
