function sumAsync(num1, num2, callback) {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    const sum = num1 + num2;
    
    setTimeout(() => {
        callback(sum); 
    }, delay);
}

sumAsync(3, 4, (result) => {
    console.log(result);
});


function sumAsync(num1, num2, callback) {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    const sum = num1 + num2;
    
    setTimeout(() => {
        callback(sum);
    }, delay);
}

sumAsync(5, 7, (result) => {
    console.log(result)
});