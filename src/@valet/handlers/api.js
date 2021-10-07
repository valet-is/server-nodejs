import forEach from 'lodash/forEach';

import * as spec from '@valet/utils/spec';

const namespace = 'api';
const specParsed = spec.load();
const { name: apiName, description, version, baseUrl } = specParsed.api;
const resources = specParsed.resources[namespace];
const routes = {};

forEach(resources, ({ methods, type, ...rest }, name) => {
  if (rest.private || !rest.published) return;

  routes[`/${name}`] = {
    methods: Object.keys(methods).filter((m) => ['get', 'post'].includes(m)),
    _links: {
      self: `${baseUrl}/${namespace}/${name}`,
    },
  };

  if (type !== 'proxy') {
    routes[`/${name}/:id`] = {
      methods: Object.keys(methods).filter((m) =>
        ['get', 'put', 'patch', 'delete'].includes(m)
      ),
      _links: {
        self: `${baseUrl}/${namespace}/${name}/:id`,
      },
    };
  }
});

export function index(req, res) {
  res.json({ name: apiName, description, version, baseUrl, namespace, routes });
}
