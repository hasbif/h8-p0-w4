function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var shop0 = []
    var shop1 = []
    var shop2 = []



    for (var i=0; i<shoppers.length; i++){
        if (shoppers[i].product == 'Sepatu Stacattu'){
            if (listBarang[0][2] >= shoppers[i].amount){
                listBarang[0][2] -= shoppers[i].amount
                shop0.push(shoppers[i].name)
            }
        }
        if (shoppers[i].product == 'Baju Zoro'){
            if (listBarang[1][2] >= shoppers[i].amount){
                listBarang[1][2] -= shoppers[i].amount
                shop1.push(shoppers[i].name)
            }
        }
        if (shoppers[i].product == 'Sweater Uniklooh'){
            if (listBarang[2][2] >= shoppers[i].amount){
                listBarang[2][2] -= shoppers[i].amount
                shop2.push(shoppers[i].name)
            }
        }
    }


    var obj0 = { 
        product: 'Sepatu Stacattu',
        shoppers: shop0,
        leftOver: listBarang[0][2],
        totalProfit: (10 - listBarang[0][2]) * listBarang[0][1] }
    var obj1 = { 
        product: 'Baju Zoro',
        shoppers: shop1,
        leftOver: listBarang[1][2],
        totalProfit: (2 - listBarang[1][2]) * listBarang[1][1] }
    var obj2 = { 
        product: 'Sweater Uniklooh',
        shoppers: shop2,
        leftOver: listBarang[2][2],
        totalProfit: (1 - listBarang[2][2]) * listBarang[2][1] }

    if (shoppers == false){
        return []
    }



    return [obj0,obj1,obj2]

  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]