import {
    createServer
} from 'http'

import {
    handler
} from './routes.js'


export default createServer(handler)
// só vai devolver a instância da rota
//