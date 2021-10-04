import fetch from 'node-fetch';
import * as response from '@app/utils/http';

export default function proxy({ endpoint }) {
  return (req, res) =>
    fetch(endpoint)
      .then((resp) => resp.json())
      .then((data) => response.ok(data)(res));
}
