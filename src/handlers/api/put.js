import * as response from '@app/utils/http';
import * as customHanlders from '@app/handlers/custom';

export default function put(req, res) {
  try {
    const { resourceConfig } = req;

    // Check if the resource is a custom handler
    // and if so, call the handler
    if (resourceConfig.type === 'custom') {
      return customHanlders[resourceConfig.type](req, res);
    }

    // @TODO: Update particular doc

    return response.ok({})(res);
  } catch (err) {
    return response.internalError()(res);
  }
}
