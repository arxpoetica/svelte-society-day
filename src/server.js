import { config } from 'dotenv'
config()
// console.log(process.env)
import { green, yellow, red } from 'ansi-colors'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import sirv from 'sirv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const development = NODE_ENV === 'development'

process.on('uncaughtException', error => console.error(red('Uncaught Exception:'), error))
process.on('unhandledRejection', error => console.error(red('Unhandled Rejection:'), error))

const app = express()

app.use(morgan(development ? 'dev' : 'combined', {
	skip: (req, res) => development ? false : res.statusCode < 400,
}))
app.use(helmet())
app.set('trust proxy', 1) // trust first proxy
app.use(compression({ threshold: 0 }))
app.use(sirv('static', { development }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(sapper.middleware())

app.listen(PORT, setTimeout(() => {
	console.log()
	console.log()
	console.log(yellow('     ~~~~~~~~~   Svelte Society Day   ~~~~~~~~~'))
	console.log(green('     listening on port ') + PORT + green(' in ') + NODE_ENV + green(' mode'))
	console.log()
	console.log()
}, 100))
