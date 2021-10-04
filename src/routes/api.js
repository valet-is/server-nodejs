import express from 'express';

import * as apiHandlers from '@app/handlers/api';
import * as apiMiddlewares from '@app/middlewares/api';

const router = express.Router();

router.get(
  '/:resource/:id',
  [apiMiddlewares.auth, apiMiddlewares.resource],
  apiHandlers.getSingle
);
router.get(
  '/:resource/',
  [apiMiddlewares.auth, apiMiddlewares.resource],
  apiHandlers.get
);
router.post(
  '/:resource',
  [apiMiddlewares.auth, apiMiddlewares.resource, apiMiddlewares.schema],
  apiHandlers.post
);
router.put(
  '/:resource/:id',
  [apiMiddlewares.auth, apiMiddlewares.resource, apiMiddlewares.schema],
  apiHandlers.put
);
router.patch(
  '/:resource/:id',
  [apiMiddlewares.auth, apiMiddlewares.resource, apiMiddlewares.schema],
  apiHandlers.patch
);
router.delete(
  '/:resource/:id',
  [apiMiddlewares.auth, apiMiddlewares.resource],
  apiHandlers.delete
);

router.get('/', apiHandlers.index);

export default router;
