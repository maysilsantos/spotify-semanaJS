import server from "./server.js"
import config from "./config.js"
import { logger } from './utils.js'


console.log(config);
server.listen(config.port)
.on('listening', () => logger.info(`server running at ${config.port} !!!`))

