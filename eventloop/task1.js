const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};

const f2 = () => {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};

const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 end");
};

function main() {
    console.log("main starts");
    f1();
    console.log("main running");
    console.log("main end");
}

main();
//java is synchronous and single-threaded language. It executes the code line by line. It is a blocking language.
//in asynchronous we use event loop to manage the call stack
// asynchronous using timers 
// 1. set time out
// 2. set immediate
// 3.process .nesxttick
// 4.setInternal
