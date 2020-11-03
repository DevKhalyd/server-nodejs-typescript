//This file handles the server
import app, { PORT } from './app'

import './database'
import { printGreen } from './utils/utils'
//Get the port where the server is listening
const port = app.get(PORT)

//Lift up the server
app.listen(port, () => {
    printGreen('Listen at port: ' + port)
})



