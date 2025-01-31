function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function calculateFibonacci() {
    const num = parseInt(document.getElementById("fibInput").value, 10);
    const resultDiv = document.getElementById("result");

    if (isNaN(num) || num < 0 || num > 50) {
        resultDiv.textContent = "Please enter a number between 0 and 50.";
        return;
    }

    const result = fibonacci(num);
    resultDiv.textContent = `Fibonacci(${num}) = ${result}`;
}
