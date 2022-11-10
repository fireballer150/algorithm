function solution(n) {
  var answer = 0;
  console.log(parseInt(n.toString(3).split("").reverse().join(""), 3));
  return answer;
}
solution(45);

function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
