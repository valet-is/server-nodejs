import * as spec from '@core/utils/spec';

import * as response from '@app/utils/http';

const sanatize = (str) => str.replace('/', '');

export default function validateResource(req, res, next) {
  const { resource } = req.params;
  const namespace = sanatize(req.baseUrl);

  const resourceConfig = spec.findResource(namespace, resource);

  if (!resourceConfig && !resourceConfig.published) {
    return response.notFound()(res);
  }

  req.resourceConfig = resourceConfig;
  return next();
}
