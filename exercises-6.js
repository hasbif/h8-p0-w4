function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arr = []
  for(var i=0; i<=angka; i++){
      if (angka%i == 0){  
        arr.push(i.toString() + (angka/i).toString())
      }
  }

  var out = arr[0].length
  for(i = 0;i<arr.length;i++){
      if (arr[i].length < out){
          out = arr[i].length
      }
      
  }

  return out


}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2