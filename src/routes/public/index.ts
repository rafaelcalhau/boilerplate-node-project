import { Router } from 'express'
import UserController from '../../controllers/UserController'

export default (routes: Router): void => {
  routes
    .get('/health', (req, res) => {
      return res.json({ status: true })
    })
  routes
    .delete('/users/:id', UserController.delete)
    .get('/users', UserController.index)
    .post('/users', UserController.store)
    .put('/users/:id', UserController.update)
}
