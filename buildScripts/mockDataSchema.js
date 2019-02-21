var schema = {
  type: 'object',
  properties: {
    todos: {
      type: 'array',
      minItems: 7,
      maxItems: 10,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            unique: true,
            minimum: 1
          },
          text: {
            type: 'string',
            faker: 'name.firstName'
          },
          completed: {
            type: 'boolean',
            value: false
          }
        },
        required: ['id', 'text', 'completed']
      }
    }
  },
  required: ['todos']
};

module.exports = schema;
