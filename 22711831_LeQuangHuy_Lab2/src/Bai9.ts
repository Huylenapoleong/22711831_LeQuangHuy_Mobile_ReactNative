function getEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = arr.filter((num) => num % 2 === 0);
            resolve(evens);
        }, 1000); 
    });
}

// Cách dùng
getEvenNumbers([1, 2, 3, 4, 5, 6])
    .then((result) => {
        console.log("Even numbers:", result); 
       
    })
    .catch((err) => {
        console.error("Error:", err);
    });
