const EventEmitter=require('events');
class School extends EventEmitter{
    starPeriod(){
        console.log("class started");
        setTimeout(()=>{
            this.emit("bell Ring",{
                period:"first",
                text:"period ended"
            });

        },1000)

    
    }
}
module.exports=School;