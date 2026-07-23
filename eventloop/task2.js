import fs from "fs/promises";

const writedata = async () => {
    try {
        console.log("about to write...")
        await fs.writeFile("data.txt", "Hello World");
        console.log("Data written to file");

    } catch (error) {
        console.log(error);
    }
}

const main =() => {
    console.log("main");
    setTimeout(f1, 0);
    // setTimeout(f1, 5000);
    setImmediate(f2);
    process.nextTick(f3);
    writedata();
    console.log("end");
};

const f3 = () => {
    console.log("f3");
}

const f2 = () => {
    console.log("f2");
};

const f1 = () => {
    console.log("f1");
};

main();