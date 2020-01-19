const getPrimes = (n) => {
	let primes = [2];
	for (let i = 3 ; i <= n;) {
		if (isPrime(i)) {
			primes.push(i);
		}
		i += 2;
	}
	return primes;
}

const isPrime = (n) => {
	let is_prime = true;
	for (let i = 2; i < n; ++i) {
		if (n % i === 0) {
			is_prime = false;
		}
		if (is_prime === false) {
			break;
		}
	}
	return is_prime
}


const returnPrimeNumbers = (n) => {
	const primes = getPrimes(n);
	for (let prime of primes) {
		if (primes.includes(n - prime) === true) {
			return [prime, n-prime]
		}
	}
}


console.log(returnPrimeNumbers(1500000));