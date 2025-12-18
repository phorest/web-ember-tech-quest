import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return attr;
  },
  
  keyForRelationship(key) {
    return key;
  },
  
  serialize(resource, request) {
    const json = JSONAPISerializer.prototype.serialize.apply(this, arguments);
    
    // Map to fix plural type names to singular
    const typeMap = {
      clients: 'client',
      projects: 'project',
    };
    
    // Helper function to fix types in relationship data
    const fixRelationshipTypes = (item) => {
      if (item.relationships) {
        Object.keys(item.relationships).forEach(relName => {
          const rel = item.relationships[relName];
          if (rel.data) {
            if (Array.isArray(rel.data)) {
              rel.data.forEach(relItem => {
                if (relItem.type && typeMap[relItem.type]) {
                  relItem.type = typeMap[relItem.type];
                }
              });
            } else if (rel.data.type && typeMap[rel.data.type]) {
              rel.data.type = typeMap[rel.data.type];
            }
          }
        });
      }
    };
    
    // Fix the type to be singular for all resources
    if (json.data) {
      if (Array.isArray(json.data)) {
        json.data.forEach(item => {
          if (item.type && typeMap[item.type]) {
            item.type = typeMap[item.type];
          }
          fixRelationshipTypes(item);
        });
      } else if (json.data.type && typeMap[json.data.type]) {
        json.data.type = typeMap[json.data.type];
        fixRelationshipTypes(json.data);
      }
    }
    
    // Fix included resources as well
    if (json.included) {
      json.included.forEach(item => {
        if (item.type && typeMap[item.type]) {
          item.type = typeMap[item.type];
        }
        fixRelationshipTypes(item);
      });
    }
    
    return json;
  },
});
