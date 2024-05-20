import express from 'express'
import {getPersons} from '../controllers/person.js'

const router = express.Router()

router.get('/', getPersons)

export default router