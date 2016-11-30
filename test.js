require('.')

async function main () {
  while (true) {
    console.clear()
    console.write('Input your age: ')
    const res = await console.read()
    console.log(res)
    if (res === 'q' || res === 'quit' || res === 'exit') {
      console.write('Bye bye！\n')
      process.exit()
      break;
    }
    const age = parseInt(res)
    if (age) {
      if (age < 18) {
        console.write('太小了，不能看\n')
      } else {
        console.write('快看快看\n')
      }
    } else {
      console.write('Input is invalidated.\n')
    }
    console.write(`Put enter to continue.`)
    await console.read()
  }
}

main()
