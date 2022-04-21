const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let count=1;
    while(count){
      count=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        count++
        }
      }
      if(count===0)break;
    }
    return arr
  };
