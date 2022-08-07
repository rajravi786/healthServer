import express from 'express'
import UserController from '../Controller/userController.js'
import SignupController from '../Controller/singUpController.js'
import LoginIdController from '../Controller/GeoCheckin.js'
import UserIdController from '../Controller/GetData.js'
import PropsController from '../Controller/Fetchdata.js'
import LeaveController from '../Controller/FetchLeave.js'
import LeavesController from '../Controller/LeaveController.js'
import GetAttendanceController from '../Controller/GetAttendance.js'
import ExpenseController from '../Controller/sendExpense.js'
import SendTask from '../Controller/SendTask.js'
import getTaskController from '../Controller/GetTask.js'
import getExpenseController from '../Controller/GetExpense.js'
import sendlocController from '../Controller/SendLocation.js'
import signoutController from '../Controller/SignOut.js'
import GetDataaController from '../Controller/GetDataa.js'

const router = express.Router()

router.post('/login', UserController.userLogin)
router.post('/signup',SignupController.signUp)

router.get('/getdata/:id',GetAttendanceController.getDataById)
router.post('/postdata/:id',ExpenseController.expense)
router.get('/getdataa/',GetDataaController.getAllDoc)
export default router