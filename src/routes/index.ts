import { Router } from 'express'
import UserController from '../controllers/UserController'
import AuthMiddleware from '../middlewares/auth'

const routes = Router()

routes
  .delete('/users/:id', UserController.delete)
  .get('/users', UserController.index)
  .post('/users', UserController.store)
  .put('/users/:id', UserController.update)

routes
  .use(AuthMiddleware)

routes
  .delete('/private/users/:id', UserController.delete)
  .get('/private/users', UserController.index)
  .post('/private/users', UserController.store)
  .put('/private/users/:id', UserController.update)

export default routes
