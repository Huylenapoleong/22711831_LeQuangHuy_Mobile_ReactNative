Promise.resolve(2)
    .then((num) => {
        const squared = num * num;
        console.log("Squared:", squared);
        return squared;
    })
    .then((num) => {
        const doubled = num * 2; 
        console.log("Doubled:", doubled);
        return doubled;
    })
    .then((num) => {
        const result = num + 5;
        console.log("Final Result:", result);
        return result;
    })
    .catch((err) => {
        console.error("Error:", err);
    });
