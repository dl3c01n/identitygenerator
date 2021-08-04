import { Response } from 'express'
import * as express from 'express'
import { firstNames, generateCreditCard, generateCvv, lastNames } from 'common'
const routes = express.Router()

export const firstNameRoute = routes.get('/firstname', (_, res: Response) => {
    const firstName = firstNames[Math.floor(Math.random() * (firstNames.length -1))]
    res.status(200).send(`Your brand new first name : ${firstName}`)
})

export const lastNameRoute = routes.get('/lastname', (_, res: Response) => {
    const lastName = lastNames[Math.floor(Math.random() * (lastNames.length -1))]
    res.status(200).send(`Your brand new last name : ${lastName}`)
})

export const fullNameRoute = routes.get('/fullname', (_, res: Response) => {
    const firstName = firstNames[Math.floor(Math.random() * (firstNames.length -1))]
    const lastName = lastNames[Math.floor(Math.random() * (lastNames.length -1))]
    const fullName = `${firstName} ${lastName}`
    res.status(200).send(`Your brand new full name : ${fullName}`)
})

export const identityRoute = routes.get('/identity', (_, res: Response) => {
    const cc = generateCreditCard()
    const cvv = generateCvv()
    res.status(200).send(`Your brand new credit card : ${cc} <br /> CVV is : ${cvv}`)
})