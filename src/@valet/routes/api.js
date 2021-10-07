import express from 'express';

import * as coreMiddlewares from '@valet/middlewares';
import * as coreHandlers from '@valet/handlers';

import * as apiMiddlewares from '@app/middlewares/api';
import * as apiHandlers from '@app/handlers/api';

const router = express.Router();

router.get('/', coreHandlers.api.index);

router.get(
  '/:resource/:id',
  [apiMiddlewares.auth, coreMiddlewares.resource],
  apiHandlers.getSingle
);
router.get(
  '/:resource/',
  [apiMiddlewares.auth, coreMiddlewares.resource],
  apiHandlers.get
);
router.post(
  '/:resource',
  [apiMiddlewares.auth, coreMiddlewares.resource, coreMiddlewares.schema],
  apiHandlers.post
);
router.put(
  '/:resource/:id',
  [apiMiddlewares.auth, coreMiddlewares.resource, coreMiddlewares.schema],
  apiHandlers.put
);
router.patch(
  '/:resource/:id',
  [apiMiddlewares.auth, coreMiddlewares.resource, coreMiddlewares.schema],
  apiHandlers.patch
);
router.delete(
  '/:resource/:id',
  [apiMiddlewares.auth, coreMiddlewares.resource],
  apiHandlers.delete
);

export default router;
