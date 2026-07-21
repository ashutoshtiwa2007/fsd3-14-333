function sayhello(name) {
    console.log(`Hello ${name}!`);
}

const sayHi = (name) => {
    console.log(`Hi, ${name}!`);
};
const findsum=(a, b) => {
    return a + b;
};

const Sum=(a, b) => a + b;

sayhello("Alice");
sayHi("Bob");
console.log("sum=" + findsum(5, 10));
console.log("Sum=" + Sum(5, 10));