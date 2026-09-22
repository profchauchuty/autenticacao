import express from 'express'
import router from './routes/router.js'

const app = express()

// Configurações
app.use(express.json())

// Rotas
app.use(router)

// Listen
app.listen(80)