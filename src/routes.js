const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

// ANTES DE USAR require-dir
// const UserController = require('./app/controllers/UserController')
// const SessionController = require('./app/controllers/SessionController')

// DEPOIS DE USAR require-dir
const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware) // toda rota a partir daqui pra baixo faz a verificação de autenticação do usuário
// Ads
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
) // put é usado quando queremos indicar uma atualização
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

// Purchases
routes.post(
  '/purchases',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

module.exports = routes
