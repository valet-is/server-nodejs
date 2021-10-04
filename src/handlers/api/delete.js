import * as response from '@app/utils/http';
import * as customHanlders from '@app/handlers/custom';

export default function del(req, res) {
  try {
    const { resourceConfig } = req;

    // Check if the resource is a custom handler
    // and if so, call the handler
    if (resourceConfig.type === 'custom') {
      return customHanlders[resourceConfig.type](req, res);
    }

    // @TODO: Check if the user has the right to delete the document

    return response.ok({})(res);
  } catch (err) {
    return response.internalError()(res);
  }
}
