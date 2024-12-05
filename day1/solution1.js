const fs = require('fs');
const { sortAndCompareList } = require('../helpers/sortAndCompareList');
const { organizeList } = require('../helpers/organizeList');

const solution = () => {
  const input =  fs.readFileSync('../inputData/day1.txt', 'utf-8');
  
  const [leftList, rightList] = organizeList(input);
  
  const answer = sortAndCompareList(leftList, rightList);
  return answer;

};  

console.log(solution());
