//Handle the routes to use for the auth. Save on MongoDB and Auth and get token
import { Router } from 'express';

import { signIn, signUp } from '../controllers/user.controller'


const router = Router()
//Routes to call
router.post('/signUp', signUp)
router.post('/signIn', signIn)

export default router

