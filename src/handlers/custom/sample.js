import { response } from '@app/utils/http';

export default function sample(req, res) {
  return response.ok(res, {});
}
