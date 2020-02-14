function cariModus(arr) {
    // you can only write your code here!
    var check = {}
    for(var i = 0;i<arr.length; i++){
        if (arr[i] in check){
            check[arr[i]]++
        }
        else {
        check[arr[i]] = 1 
        }
        
    }
    var temp = ''
    var num = 0
    var count = 0
    for (key in check){
        if (check[key] > num){
        temp = key
        num = check[key]
        }

        if (check[key] == num){
            count ++
        }
        // key = '2'
        // check[key] = 1
    }


    if (num == arr.length || count ==arr.length){
        temp = '-1'
    }


    return temp
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
