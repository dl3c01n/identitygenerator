import { Response } from 'express'
import * as express from 'express'
import { firstNames, generateCreditCard, generateCvv, generateExpirationDate, lastNames } from 'common'
const routes = express.Router()

export const firstNameRoute = routes.get('/firstname', (_, res: Response) => {
    const firstName = firstNames[Math.floor(Math.random() * (firstNames.length -1))]
    const identity = {
        firstName
    }
    res.status(200).json(identity)
})

export const lastNameRoute = routes.get('/lastname', (_, res: Response) => {
    const lastName = lastNames[Math.floor(Math.random() * (lastNames.length -1))]
    const identity = {
        lastName
    }
    res.status(200).json(identity)
})

export const fullNameRoute = routes.get('/fullname', (_, res: Response) => {
    const firstName = firstNames[Math.floor(Math.random() * (firstNames.length -1))]
    const lastName = lastNames[Math.floor(Math.random() * (lastNames.length -1))]
    const fullName = `${firstName} ${lastName}`
    const identity = {
        firstName,
        lastName,
        fullName
    }
    res.status(200).json(identity)
})

export const identityRoute = routes.get('/identity', (_, res: Response) => {
    const cc = generateCreditCard()
    const cvv = generateCvv()
    const creditCard = {
        number: cc,
        cvv
    }
    res.status(200).json(creditCard)
})

export const creditCardRoute = routes.get('/creditcard', (_, res: Response) => {
    const cc = generateCreditCard()
    const cvv = generateCvv()
    const expirationDate = generateExpirationDate()
    const creditCard = {
        number: cc,
        cvv,
        expirationDate
    }
    res.status(200).json(creditCard)
})