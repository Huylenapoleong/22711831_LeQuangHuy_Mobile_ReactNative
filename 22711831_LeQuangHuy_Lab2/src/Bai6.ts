function simulateTask2(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done ${time}ms`);
        }, time);
    });
}
Promise.all([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(1500)
]).then((results) => {
    console.log("All tasks finished:");
    console.log(results); 

});
