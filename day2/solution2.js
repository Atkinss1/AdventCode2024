const fs = require('fs');

const solution = () => {
	const mockData = [
		[7, 10, 8, 10, 11],
		[29, 28, 27, 25, 26, 25, 22, 20],
		[1, 2, 3, 4, 5],
	];

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

       if (arr[i] > arr[i - 1]) {
					const modifiedArray = [...arr.slice(0, i), ...arr.slice(i + 1)];
					return isValid(modifiedArray);
				}
      return i === 0 || arr[i] < arr[i - 1];
		});
    
		const withinRange = arr.every((_, i) => {
      if (i === 0) {
        return true;
			}
      
      const diff = Math.abs(arr[i] - arr[i - 1]);

			if (
				diff >= 1 &&
				diff <= 3
			) {
				return true;
			}

		});

		return (isIncreasing || isDecreasing) && withinRange;
	}

	return totalCount;
};

console.log(solution());
