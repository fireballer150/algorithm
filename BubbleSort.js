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

  const bubbleSort = function (arr) {
    for(let i = 0; i < arr.length; i++) {
      let swapped = 0;
      for(let j = 0; j < arr.length - i; j++) {
        if(arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped++;
        }
      }
      if(!swapped) break;
    }
    return arr;
  };

const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let sorted = 0;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          sorted++;
          swap(j, j + 1, arr);
        }
      }
      if (!sorted) {
        break;
      }
    }
    return arr;
  };

//reference zerocho
var bubbleSort = function(array) {
  var length = array.length;
  var i, j, temp;
  for (i = 0; i < length - 1; i++) { // 순차적으로 비교하기 위한 반복문
    for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (array[j] > array[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        temp = array[j]; // 두 수를 서로 바꿔준다
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

function bubbleSort (array) {
for (let i = 0; i < array.length; i++) {
let swap;
for (let j = 0; j < array.length - 1 - i; j++) {
if (array[j] > array[j + 1]) {
swap = array[j];
array[j] = array[j + 1];
array[j + 1] = swap;
}
}
console.log(`${i}회전: ${array}`);
if (!swap) {
break;
}
}
return array;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));

function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}
