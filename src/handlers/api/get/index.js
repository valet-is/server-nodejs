/* eslint no-param-reassign: 0 */
import * as response from '@app/utils/http';
import * as customHanlders from '@app/handlers/custom';

import proxy from './proxy';

export default function get(req, res) {
  try {
    const { resourceConfig } = req;

    // Check if the resource is a proxy,
    // and if so, proxy the request to the target
    if (resourceConfig.type === 'proxy') {
      return proxy(resourceConfig)(req, res);
    }

    // Check if the resource is a custom handler
    // and if so, call the handler
    if (resourceConfig.type === 'custom') {
      return customHanlders[resourceConfig.type](req, res);
    }

    // @TODO: Fetch all the docs from the database asscoaited with particular resource.
    // @TODO: Implement search functionality.
    // @TODO: Implement pagination.

    // const { search, offset, limit } = req.query;

    return response.ok([])(res);
  } catch (err) {
    return response.internalError(err)(res);
  }
}
