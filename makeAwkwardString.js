function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        answer += arr[i][j].toUpperCase();
        // console.log(
        //   "j, j%2, arrij,res1",
        //   j,
        //   j % 2,
        //   arr[i][j],
        //   arr[i][j].toUpperCase(),
        //   res1,
        //   arr2
        // );
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
    if (i < arr.length - 1) {
      answer += " ";
    }
  }

  console.log("answer", answer);
  return answer;
}
solution("try hello world");
