const number = Number(window.prompt("Primes up to:"));

function showPrimes(n) {
    if(Number.isNaN(number)) {
        alert("The inserted value is not a valid number");
        throw new Error();
    }

    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;

        printPrimes(i);  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}

function printPrimes(i) {
    const newDiv = document.createElement("div");
    newDiv.className = "prime";
    newDiv.innerText = i;
    const section = document.querySelector("section");
    section.appendChild(newDiv);
}

showPrimes(number);