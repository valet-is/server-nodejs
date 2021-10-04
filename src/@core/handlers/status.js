import * as spec from '@core/utils/spec';
import * as response from '@core/utils/http';

export function get(req, res) {
  try {
    return response.ok(spec.getStatus())(res);
  } catch (err) {
    return response.internalError(err)(res);
  }
}
