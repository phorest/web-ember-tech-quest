import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ClientsController extends Controller {
  @service router;

  queryParams = ['projectId'];
  @tracked projectId = null;

  @action
  filterByProject(event) {
    const projectId = event.target.value;
    this.projectId = projectId || null;
  }

  @action
  addNewClient() {
    // Placeholder for adding new client functionality
    alert('Add new client functionality would go here');
  }
}
