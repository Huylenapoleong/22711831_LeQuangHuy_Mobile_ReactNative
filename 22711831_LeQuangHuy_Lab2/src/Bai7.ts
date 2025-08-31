function simulateTask3(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    });
}

// Dùng Promise.race
Promise.race([
    simulateTask3(1000),
    simulateTask3(2000),
    simulateTask3(1500)
]).then((result) => {
    console.log("First finished:", result);
    
});
