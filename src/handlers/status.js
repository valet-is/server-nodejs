import * as response from '@app/utils/http';
import * as spec from '@core/utils/spec';

export function get(req, res) {
  try {
    return response.ok(spec.getStatus())(res);
  } catch (err) {
    return response.internalError(err)(res);
  }
}
