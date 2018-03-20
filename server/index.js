import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import morgan from 'morgan'
import routes from './routes/index'
import connect from './db'
const port = 3000
const env = 'development'
const dev = env !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

connect()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(morgan('dev')) //Logger

    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    )

    server.use(bodyParser.json())

    server.use('/api', routes)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })

export default app
