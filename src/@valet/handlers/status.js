import * as spec from '@valet/utils/spec';
import * as response from '@valet/utils/http';

export function get(req, res) {
  try {
    return res.status(200).json(spec.getStatus());
  } catch (err) {
    return response.internalError(err)(res);
  }
}
