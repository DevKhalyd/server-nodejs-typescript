//Handle the user model read more in mongodb docs
//Moongose is a module to allow to handle the database with a better way
import { Schema, Document, model } from 'mongoose'
import bcrypt from 'bcrypt'
// '../' means out of this folder
// './' means in this folder

//Allow to handle the schema
interface IUser extends Document {
    email: string
    password: string
    comparePassword: (password: string) => Promise<boolean>
}

//Handle the name to found that schema
const userPrefix = 'uS'

//Create the schema to use
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
})

//This function is like a middleware beacuse run before the User is created
userSchema.pre<IUser>('save', async function (next) {
    //Refers to `this` schema
    const user = this

    //THe user is not updating the password
    if (!user.isModified('password')) return next()

    // A promise to be either resolved with the generated salt or rejected with an Error
    const salt = await bcrypt.genSalt()

    //Password enconded
    const hash = await bcrypt.hash(user.password, salt)
    //Password 'enconded'
    user.password = hash
    //Go to next step
    next()
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {

    const user = this

    let result

    try {
        result = await bcrypt.compare(password, user.password)
    } catch (error) {
        result = false
    }
    return result
}

//This schema is used to register an user
const User = model<IUser>(userPrefix, userSchema)

export {
    User as default,
    IUser,
}



