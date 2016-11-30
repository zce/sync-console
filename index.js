const readline = require('readline')
const colors = require('colors/safe')

const { stdin, stdout } = process

// console.read = () => new Promise(resolve => rl.once('line', line => resolve(line.trim())))
console.read = () => new Promise(resolve => {
  const rl = readline.createInterface({ input: stdin, output: stdout })
  rl.once('line', line => {
    resolve(line.trim())
    rl.close()
  })
})

console.write = (...params) => stdout.write(...params)

console.readkey = () => new Promise(resolve => stdin.once('keypress', (chunk, key) => resolve(key)))

console.clear = () => console.write('\u001b[2J\u001b[0;0H')

console.colors = colors

