//Make the validations to know if a user has permission to access to data
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import config from '../config/config'
import User from '../models/user'
import { printRed } from '../utils/utils'

//Options to set up the Strategy
const opts: StrategyOptions = {
    //Token from header with the prefix Bearer
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

//payload contains the data stored when the user was sign in
export default new Strategy(opts, async (payload, done) => {
    //Get the userId stored when the user sign In in the app
    const userId = payload.id

    try {

        //This could be null
        const user = await User.findById(userId)

        //User not found
        if (!user)
            //Null for error and false for user
            return done(null, false)

        return done(null, user)

    } catch (error) {
        printRed(error)
        return done(null, false)
    }
})



