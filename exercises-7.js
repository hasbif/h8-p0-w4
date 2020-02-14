function urutkanAbjad(string) {
    // you can only write your code here!
    
    //to array
    var str = []
    for (var i = 0; i<string.length; i++){
        str.push(string[i])
    }
    

    //sort code
    var temp = ''
    for (var i = 0; i<str.length;i++){
      for(var j = 0; j<str.length;j++){
        if (str[j] > str[j+1]){
          temp = str[j]
          str[j] = str[j+1]
          str[j+1] = temp
        
        }
      }
  
    }
    
    //to string
    var out = ''
    for (var i = 0; i<string.length; i++){
        out +=str[i]
    }
    
    return out
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  