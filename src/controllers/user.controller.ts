//Hnadles the behavior for the routes in user.controller
import { Response, Request } from 'express'
import User, { IUser } from '../models/user'
import { printGreen, printRed, printYellow } from '../utils/utils'
import jwt from 'jsonwebtoken'
import config from '../config/config'

//The docs are too complete
//https://www.npmjs.com/package/jsonwebtoken
function createJSONWebToken(user: IUser): string {

    const options = {
        //In a day this token will be expire
        expiresIn: 86400
    }
    //payload store the object and enconded to a JWT.
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, options)
}

const signUp = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({
            msg: 'Invalid data'
        })

    const currentUser = await User.findOne({ email: email })

    printRed('User exists already')

    //There is an user created
    if (currentUser) return res.status(400).json({
        msg: 'User already exists'
    })

    //That data is necessary
    const user = new User(req.body)

    const responseUser = await user.save()

    return res.json({
        responseUser
    })

}

const signIn = async (req: Request, res: Response): Promise<Response> => {

    const { email, password }: { email: string, password: string } = req = req.body;

    if (!email || !password)
        return res.status(400).json({
            msg: 'Invalid data'
        })

    const currentUser = await User.findOne({ email: email })

    if (!currentUser)
        return res.status(404).json({
            msg: 'User does not exists'
        })

    //Get the password match
    //FIXME:
    const isMatch = await currentUser.comparePassword(password)

    if (!isMatch) return res.status(400).json({
        msg: 'Password dont match'
    })

    return res.json({
        token: createJSONWebToken(currentUser),
        email: email
    })

}

export {
    signIn,
    signUp
}

