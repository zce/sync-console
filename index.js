const readline = require('readline')
const colors = require('colors/safe')

const { stdin, stdout } = process
const rl = readline.createInterface({ input: stdin, output: stdout })

console.read = () => new Promise(resolve => rl.once('line', line => resolve(line.trim())))

console.write = (...params) => stdout.write(...params)

console.readkey = () => new Promise(resolve => stdin.once('keypress', (chunk, key) => resolve(key)))

console.clear = () => console.write('\u001b[2J\u001b[0;0H')

console.colors = colors
