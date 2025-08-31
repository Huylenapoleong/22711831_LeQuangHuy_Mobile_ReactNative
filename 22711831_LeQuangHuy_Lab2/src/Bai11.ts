
function sayHelloAsync2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}


async function run() {
    const message = await sayHelloAsync2();
    console.log(message); 
}

run();
