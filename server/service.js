import fs from 'fs'
import config from './config.js'
import { join } from 'path'
import fsPromises from 'fs/promises'

const {
    dir: {
        publicDirectory
    }
 } = config


export class Service {
    createFileStream(filename) {
         return fs.createReadStream(filename)
    }


    async getFileInfo(file) {
        const fullFilePath = join(publicDirectory, file)
        //file = home/index.html
        await fsPromises.access(fullFilePath)
        const fileType = extname(fullFilePath)
        return {
            type: fileType,
            name: fullFilePath
        }
    }


    async getFileStream(file) {
        const {
            name,
            type
        } = await this.getFileInfo(file)
        return {
            stream: this.createFileStream(name),
            type
        }
    }
}

//ao invés de ler todo o arquivo de uma vez, nós lemos o arquivo em pequenos pedaços