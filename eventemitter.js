import {EventEmitter} from 'node:events'

const sayHi = (name) => {
    console.log(`${name} logged in`);
};


const task =new EventEmitter();

task.once("greet",()=>{
    console.log("System started")
})
task.on('greet', sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts working`)
})
task.on("greet",(name)=> {
    console.log(`${name} logged out`)
})
task.on("greet",(name)=>{
    console.log(`${name} exit`)   
})
task.once("exit",()=>{
    console.log("System exited")
});
task.emit('greet',"ashu");
task.off("greet", sayHi);
task.emit("greet","ashmit");
console.log("total listeners",task.listenerCount("greet"));
task.removeAllListeners();
console.log("total listeners",task.listenerCount("greet"));