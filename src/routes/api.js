import express from 'express';

import * as coreMiddlewares from '@core/middlewares';
import * as coreHandlers from '@core/handlers';

import * as middlewares from '@app/middlewares';
import * as apiHandlers from '@app/handlers/api';

const router = express.Router();

router.get('/', coreHandlers.api.index);

router.get(
  '/:resource/:id',
  [middlewares.api.auth, coreMiddlewares.resource],
  apiHandlers.getSingle
);
router.get(
  '/:resource/',
  [middlewares.api.auth, coreMiddlewares.resource],
  apiHandlers.get
);
router.post(
  '/:resource',
  [middlewares.api.auth, coreMiddlewares.resource, coreMiddlewares.schema],
  apiHandlers.post
);
router.put(
  '/:resource/:id',
  [middlewares.api.auth, coreMiddlewares.resource, coreMiddlewares.schema],
  apiHandlers.put
);
router.patch(
  '/:resource/:id',
  [middlewares.api.auth, coreMiddlewares.resource, coreMiddlewares.schema],
  apiHandlers.patch
);
router.delete(
  '/:resource/:id',
  [middlewares.api.auth, coreMiddlewares.resource],
  apiHandlers.delete
);

export default router;
