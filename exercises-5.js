function ubahHuruf(kata) {
    // you can only write your code here!
    var out = ''
    var alp = 'abcdefghijklmnopqrstuvwxyza'
    for (var i = 0; i<kata.length;i++){
        for (var j= 0; j<alp.length;j++){
            if (kata[i] == alp[j]){
                out += alp[j+1]
                break
            }
        }
    }
    return out
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu