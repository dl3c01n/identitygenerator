import * as express from 'express'
import { Response } from 'express'

const router = express.Router()

export const errorRoute = router.get('*', (_, res: Response) => {
    res.status(404).send('Mmmmh, you tried to hack me ???????')
})