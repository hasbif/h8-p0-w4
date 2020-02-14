function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var flag
    var money
    var arr = []
    for (var i = 0; i<arrPenumpang.length; i++){
        flag = false
        money = 0
        for( var j = 0; j<rute.length; j++){
            if ( rute[j]== arrPenumpang[i][1]){
                flag = true
            }

            if (rute[j] == arrPenumpang[i][2]){
                break
            }
            if (flag == true){
                money += 2000
            }
        }
        
        var obj = {penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: money
        }

        arr.push(obj)

    }
    return arr

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]