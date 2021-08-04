import * as express from 'express'
import { firstNameRoute, lastNameRoute, fullNameRoute, errorRoute } from "routes"

const app = express()
app.use('/' ,firstNameRoute, lastNameRoute, fullNameRoute, errorRoute)

app.listen(66)