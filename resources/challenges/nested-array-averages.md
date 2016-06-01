```javascript
// This function accepts two parameters: an array of arrays, and the resulting array of averages. Each nested array is a collection of number values.

array1 = [1,2,3,4,5];
array2 = [2,4,6,8,10];

dataArray = [array1, array2];
result = [];

function arrayAverages(arrArr, newArr) {
  for(var i = 0; i < arrArr.length; i ++) {
    newArr.push(arrArr[i].reduce(function(prev,cur){
      return (prev + cur)
    })/arrArr[i].length);
  }
}

arrayAverages(dataArray, result);  // [3,6]
```
