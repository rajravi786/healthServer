import express from 'express'

import UserController from '../Controller/userController.js'
import SignupController from '../Controller/singUpController.js'

import GetAttendanceController from '../Controller/GetAttendance.js'
import ExpenseController from '../Controller/sendExpense.js'

import GetDataaController from '../Controller/getdataa.js'

const router = express.Router()

router.post('/login', UserController.userLogin)
router.post('/signup',SignupController.signUp)

router.get('/getdata/:id',GetAttendanceController.getDataById)
router.post('/postdata/:id',ExpenseController.expense)
router.get('/getdataa/',GetDataaController.getAllDoc)
export default router