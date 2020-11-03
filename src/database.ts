//This file contains the script to set up the database
import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config/config'
import { printGreen, printRed } from './utils/utils'

const connection = mongoose.connection

const options: ConnectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}
//If you need to create additional connections, use mongoose.createConnection
mongoose.connect(config.DB.URI, options)

//Note: If the local connection fails then try using 127.0.0.1 instead of localhost.
// Sometimes issues may arise when the local hostname has been changed.

connection.once('open', () => {
    printGreen('Moongose Connected')
})

connection.on('error', (err) => {
    printRed('An error has ocurred: ' + err)
    process.exit(0)
})
