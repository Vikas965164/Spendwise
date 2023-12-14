
import express from 'express';

import { postConsumption, getElecricity } from '../controller/consumptionController.js'
import { fetchOnlineExpense, postOnlineExpense, updateConsumption } from '../controller/onlineExpenseController.js';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { postInvestment, fetchInvestment, updateInvestment } from '../controller/investmentController.js';
import { postContact } from '../controller/contactController.js';
import {fetchSalary, postSalary} from '../controller/salaryController.js'
import { fetchTravelExpense, postTravelExpense } from '../controller/travelController.js';
import { fetchPersonalExpenses, postPersonalExpense } from '../controller/personalController.js';

const router = express.Router();

// Electricity Expense
router.post('/api/consumption', postConsumption); // POST data to the database
router.get('/api/consumption/:username', getElecricity); // POST data to the database
// router.get('/api/consumption', fetchConsumption); // GET data from the database

// Online Expense
router.post('/api/online', postOnlineExpense); // Post data to the database
router.get('/api/online/:username', fetchOnlineExpense); // Get data from the database
router.put('/api/online', updateConsumption)

// Investment 
router.post('/api/investment', postInvestment);
router.get('/api/investment/:username', fetchInvestment);
router.put('/api/investment', updateInvestment)

// Salary
router.post('/api/salary', postSalary);
router.get('/api/salary/:username', fetchSalary);

// Travel
router.post('/api/travel', postTravelExpense);
router.get('/api/travel/:username', fetchTravelExpense);

// Personal Expense
router.post('/api/personal',postPersonalExpense);
router.get('/api/personal/:username', fetchPersonalExpenses);

// Login and Signup
router.post('/api/signup', userSignup);
router.post('/api/login', userLogin);

// Contact
router.post('/api/contact', postContact);

export default router;