export const generateCvv = () => {
    const cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    return cvv
}