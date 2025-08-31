function sayHelloAsync(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Asnc");
        }, 2000); 
    });
}

sayHelloAsync().then((message) => {
    console.log(message); 
});
