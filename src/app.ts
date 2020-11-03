//This file serves to setting up the server no to lift up
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routerAuth from './routes/auth.routes'
import routerSpecial from './routes/special.routes'
import passport from 'passport'
import passportMiddleware from './middlewares/passpot.middleware'

//These variables are used to avoid errors when trying to get values to read in the server
const PORT = 'port'
const DEV = 'dev'

//initializations
const app = express()


//settings

//port env or 3000 port
//3000 when is in localhost
//Set the port for then get from another places
app.set(PORT, process.env.PORT || 3000)

//middlewares
app.use(morgan(DEV))
//Allow to accept request from special websites (Research for more info)
app.use(cors())
//Allow to use json objects
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
//Init passport
app.use(passport.initialize())
//Set up the passport
passport.use(passportMiddleware)


//routes
app.get('/', (_req, res) => {
    //Sending a response to the client
    return res.send(`The API is at: ${app.get(PORT)} port`)
})

app.use(routerAuth)
app.use(routerSpecial)




export {
    app as default,
    PORT,
    DEV
} 