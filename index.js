const readline = require('readline')
const colors = require('colors/safe')
const { stdin, stdout } = process

exports.readLine = () => new Promise(resolve => {
  const rl = readline.createInterface({ input: stdin, output: stdout })
  rl.once('line', line => {
    resolve(line.trim())
    rl.close()
  })
})
exports.readKey = () => new Promise(resolve => stdin.once('keypress', (chunk, key) => resolve(key)))

exports.write = (...params) => stdout.write(...params)
exports.writeLine = (str) => console.log(str);

exports.clear = () => exports.write('\u001b[2J\u001b[0;0H')
exports.colors = colors
