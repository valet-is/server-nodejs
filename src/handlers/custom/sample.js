import { response } from '@core/utils/http';

export default function sample(req, res) {
  return response.ok(res, {});
}
