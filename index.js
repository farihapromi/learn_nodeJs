// const _=require('lodash');
// const people2=require('./people')


// // console.log(people2.people);
// // console.log(people2.a);
// console.log(_.last(people2.people));
// const os=require('os');
// console.log(os.cpus())
// const fs=require('fs');
// fs.writeFileSync("myfile.txt","hello promi")
// fs.appendFileSync("myfile.txt","hi ,How are u")
//event moudle
// const EventEmitter=require('events')
// const emitter=new EventEmitter();
const School=require('./school')
//school er ekta object,ei object a emitter er sob function ache
const school=new School();
school.on('bell Ring',({period,text})=>{
    console.log( `We need to run because ${period} and ${text}` )
})
// emitter.emit("bell Ring","second period")

school.starPeriod()