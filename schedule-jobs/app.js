const schedule = require('node-schedule')

// const someDate = new Date('2022-07-12T09:47:00.000+5:30')
// schedule.scheduleJob(someDate, () => {
//   console.log('Job Run at ', new Date().toString())
// })

schedule.scheduleJob('m-job', '*/2 * * * * *', () => {
  console.log('I ran..........')
  schedule.cancelJob('m-job')
})
