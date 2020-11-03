//Handles the protected routes
import { Router } from 'express'
import passport from 'passport'

const router = Router()

//jwt is called by default the password method
router.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('All ok')
})

export default router