import express from 'express'
import getUser, { user } from '../controllers/userController'
const router = express.Router()

router.route('/users').get(getUser)
router.route('/user').post(user)

export default router
