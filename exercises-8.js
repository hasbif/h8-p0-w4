function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var kecil = 'abcdefghijklmnopqrstuvwxyz'
    var besar = kecil.toUpperCase()
    var str = ''

    var word = kalimat
    for (var i = 0; i<kalimat.length;i++){
        if (word[i] >= 'a' && word[i] <= 'z' || word[i] >= 'A' && word[i]<= 'Z'){
            for (var j=0;j<kecil.length;j++){
                if (word[i] == kecil[j]){
                    str += word[i].toUpperCase()
                }else if (word[i] == besar[j]){
                    str += word[i].toLowerCase()
                }
                
            }
        }
        
        else{str += word[i]}
    }
    return str
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"