import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ClientsRoute extends Route {
  @service store;

  queryParams = {
    projectId: {
      refreshModel: true,
    },
  };

  async model(params) {
    const queryParams = {};
    if (params.projectId) {
      queryParams.projectId = params.projectId;
    }
    const clients = await this.store.query('client', queryParams);
    const projects = this.modelFor('application').projects;
    
    return {
      clients,
      projects,
    };
  }
}
