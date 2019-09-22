import { Router } from 'express'
import UserController from '../../controllers/UserController'

export default (routes: Router): void => {
  routes
    .delete('/users/:id', UserController.delete)
    .get('/users', UserController.index)
    .post('/users', UserController.store)
    .put('/users/:id', UserController.update)
}
