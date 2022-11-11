function solution(d, budget) {
  var answer = 0;
  d.sort();
  console.log(d);
  for (i = 0; i < d.length; i++) {
    console.log("budget", budget);
    if (d[i] > budget) {
      break;
    } else {
      answer++;
      budget -= d[i];
    }
  }
  return answer;
}

solution([1, 3, 2, 5, 4], 9);

//1. sort()를 하면 원본배열을 변경시킨다
//2.가장 작은것부터 정렬해서 빼면 가장 많은 곳에 지원을 할수 있다.
//3.오름차순정렬시 sort() 랑 sort(function(a,b) {return a-b;})은 다르다...
