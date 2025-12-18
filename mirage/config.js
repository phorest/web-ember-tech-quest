import { createServer } from 'miragejs';
import { singularize, pluralize } from 'ember-inflector';

export default function (config) {
  let finalConfig = {
    ...config,
    inflector: {
      singularize,
      pluralize,
    },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = 'api';
  this.passthrough('/write-coverage');

  this.get('/clients', function (schema, request) {
    let clients = schema.clients.all();

    if (request.queryParams.projectId) {
      clients = schema.clients.where({ primaryProjectId: request.queryParams.projectId });
    }

    return clients;
  });

  this.post('/clients');
  
  this.get('/projects', function (schema) {
    return schema.projects.all();
  });
}

