// //complete the calculatePrice function
// //Do not alter the starter code
// const goods = {
//     apple: { price: 150, quantity: 2 },
//     banana: { price: 75, quantity: 3 },
//     orange: { price: 125, quantity: 1 }
//     };    
//     function calculatePrice(goods){
//         let sum=0;
//         //Implement your function here
//         for(let i in goods)
//             {
//                 sum += i.price*i.quantity;
//             }
//         return sum;
//     }
//     console.log(calculatePrice(goods));
//     //output : 650


const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };

    function calculatePrice(goods) {
    let totalPrice = 0;
    for (let item in goods) {
    goods[item] = { price, quantity } ;
    const itemTotalPrice = price * quantity;
    totalPrice += itemTotalPrice;
    }
    return totalPrice;
    }