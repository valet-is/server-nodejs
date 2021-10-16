import * as spec from '@core/utils/spec';

const namespace = 'core';

export { get as status } from './status';
export { post as bootstrap } from './bootstrap';
export * as api from './api';

export default function index(req, res) {
  const specParsed = spec.load();
  const { name, description, baseUrl } = specParsed.api;

  res.json({
    name,
    description,
    baseUrl,
    namespace,
    routes: {
      // @TODO: Auto generate routes
      '/resource': {
        methods: ['get', 'post'],
        _links: {
          self: `${baseUrl}/${namespace}/resource`,
        },
      },
      '/resource/:id': {
        methods: ['get', 'put', 'patch', 'delete'],
        _links: {
          self: `${baseUrl}/${namespace}/resource/:id`,
        },
      },
      '/media': {
        methods: ['get', 'post'],
        _links: {
          self: `${baseUrl}/${namespace}/media`,
        },
      },
      '/users': {
        methods: ['get', 'post', 'delete', 'patch'],
        _links: {
          self: `${baseUrl}/${namespace}/users`,
        },
      },
      '/config': {
        methods: ['get', 'post', 'delete', 'patch'],
        _links: {
          self: `${baseUrl}/${namespace}/config`,
        },
      },
    },
    _links: {},
  });
}
