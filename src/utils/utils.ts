import chalk from 'chalk'
const log = console.log;


const printRed = (objetc: any) =>
    log(chalk.red.bold(objetc))

const printYellow = (objetc: any) => log(chalk.yellow.bold(objetc))


const printGreen = (objetc: any) => log(chalk.green.bold(objetc))

const printBlue = (objetc: any) => log(chalk.blue.bold(objetc))


export {
    printRed,
    printYellow,
    printGreen,
    printBlue
}

