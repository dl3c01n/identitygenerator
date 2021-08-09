import * as express from 'express'
import { firstNameRoute, lastNameRoute, fullNameRoute, errorRoute, creditCardRoute } from "./routes"

const app = express()
app.use('/' ,firstNameRoute, lastNameRoute, fullNameRoute, creditCardRoute, errorRoute)

app.listen(66)