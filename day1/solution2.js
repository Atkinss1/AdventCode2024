const fs = require('fs');
const { organizeList } = require('../helpers/organizeList');

const solution = () => {
  const hash = {};
  const data = fs.readFileSync('../inputData/day1.txt', 'utf-8');
  const [leftList, rightList] = organizeList(data);
  for (let i = 0; i < leftList.length; i++) {
    for (let j = 0; j < rightList.length; j++) {
      if (rightList[j] === leftList[i]) {
        if (hash[leftList[i]] === undefined) {
          hash[leftList[i]] = 1;
        } else {
          hash[leftList[i]]++;
        }
      }
    }
  };
  const answer = Object.entries(hash).map(arr => {
    const totalCount = arr.map(Number);
    let count = 0;
    for (let i = 0; i < totalCount.length; i++) {
       count += totalCount[i] * totalCount[i + 1];
      i++;
    }
    return count;
  }).reduce((a, c) => a + c, 0);
  return answer;
};

console.log(solution());