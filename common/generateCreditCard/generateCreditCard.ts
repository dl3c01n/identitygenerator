import * as gen from 'creditcard-generator'

export const generateCreditCard = () => {
    const cc = gen.GenCC('VISA')
    const formatedCc = cc.toString().replace(/\d{4}(?=.)/g, '$&-')
    return formatedCc
}