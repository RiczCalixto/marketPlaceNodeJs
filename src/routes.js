const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

// ANTES DE USAR require-dir
// const UserController = require('./app/controllers/UserController')
// const SessionController = require('./app/controllers/SessionController')

// DEPOIS DE USAR require-dir
const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware) // toda rota a partir daqui pra baixo faz a verificação de autenticação do usuário
// Ads
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update) // put é usado quando queremos indicar uma atualização
routes.delete('/ads/:id', controllers.AdController.destroy)

// Purchases
routes.post('/purchases', controllers.PurchaseController.store)

module.exports = routes
