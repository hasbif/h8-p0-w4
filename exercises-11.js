function shoppingTime(memberId, money) {
    // you can only write your code here!

    if (memberId == null || memberId == ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }

    if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }

    var arr = []
    var money1 = money


    
    if (money1 >= 1500000 ){
        money1 -= 1500000
        arr.push('Sepatu Stacattu')
    }
    if (money1 >= 500000){
        money1 -= 500000
        arr.push('Baju Zoro')
    }
    if (money1 >= 250000){
        money1 -= 250000
        arr.push('Baju H&N')
    }
    if (money1 >= 175000){
        money1 -= 175000
        arr.push('Sweater Uniklooh')
    }
    if (money1 >= 50000){
        money1 -= 50000
        arr.push('Casing Handphone')
    }

    var out = {
        memberId: memberId,
        money: money,
        listPurchased: arr,
        changeMoney: money1
    }

    return out
    



  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

