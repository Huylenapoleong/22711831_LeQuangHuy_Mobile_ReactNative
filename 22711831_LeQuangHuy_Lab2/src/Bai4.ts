function getRandomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random()*2); 
        setTimeout(() => {
            if (num > 0.3) {
                resolve(num); 
            } else {
                reject(new Error("Random number too small!"));
            }
        }, 1000); 
    });
}
getRandomNumber()
    .then((value) => {
        console.log("Success Random number:", value);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
