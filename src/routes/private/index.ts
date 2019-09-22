import { Router } from 'express'
import UserController from '../../controllers/UserController'
import AuthMiddleware from '../../middlewares/auth'

export default (routes: Router): void => {
  routes
    .use(AuthMiddleware)

  routes
    .delete('/private/users/:id', UserController.delete)
    .get('/private/users', UserController.index)
    .post('/private/users', UserController.store)
    .put('/private/users/:id', UserController.update)
}
