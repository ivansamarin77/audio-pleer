console.log('module.js')

async function start() {
  return await Promise.resolve('async working now')
}

start().then(console.log)
