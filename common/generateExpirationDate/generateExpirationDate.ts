export const generateExpirationDate = () => {
    const month = `0${Math.floor(Math.random() * (9 - 1 + 1) + 1)}`
    const year = Math.floor(Math.random() * (30 - 21))
    const expirationDate = `${month}-202${year.toString()}`
    return expirationDate
}