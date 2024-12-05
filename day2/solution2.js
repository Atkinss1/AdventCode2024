const fs = require('fs');

const solution = () => {
	const data = fs.readFileSync('../inputData/day2.txt', 'utf-8');
	const parsedData = data
		.trim()
		.split('\n')
		.map((arr) => arr.split(/\s+/).map(Number));

	let totalCount = 0;

	parsedData.forEach((arr) => {
		if (isValid(arr)) {
			totalCount++;
		}
	});

	function isValid(arr) {
		if (arr.length < 2) {
			return true;
		}

		const isIncreasing = arr.every((_, i) => {
			return i === 0 || arr[i] > arr[i - 1];
		});

		const isDecreasing = arr.every((_, i) => {
			return i === 0 || arr[i] < arr[i - 1];
		});

		const withinRange = arr.every((_, i) => {
			if	(i === 0) {
        return true;
      }

      if (Math.abs(arr[i] - arr[i - 1]) >= 1 && Math.abs(arr[i] - arr[i - 1]) <= 3) {
        return true;
      }

      return false;
		});

		return (isIncreasing || isDecreasing) && withinRange;
	}

	return totalCount;
};

console.log(solution());
