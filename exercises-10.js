function changeMe(arr) {
  // you can only write your code here! 


  for (var i = 0; i<arr.length;i++){
    console.log (`${i+1}. ${arr[i][0]} ${arr[i][1]}:`)
      
    var obj = {
        firstName: arr[i][0],
        lastName:arr[i][1],
        gender:arr[i][2],
        age: 2020-arr[i][3],
      }
    if (arr[i][3] == null || arr[i][3] < 0){
          obj.age = 'Invalid Birth Year'
    }
    console.log(obj)
  }
  return

  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""