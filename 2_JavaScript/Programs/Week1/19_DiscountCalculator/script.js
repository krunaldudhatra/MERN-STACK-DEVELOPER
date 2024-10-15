//Convert the type to numbers
//Calculate the discountedprice
function shoppingDiscountCalculator(originalValue,discountPercentage){
    let answer=Number(originalValue)* 
        ( 100- Number(discountPercentage) ) /100  ;
    
return parseFloat(answer)
}