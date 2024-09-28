function coffeeMachine(coffeeType) {
    let answer;
    coffeeType=coffeeType.toLowerCase();
    //Write your code here
    switch( coffeeType)
        {
            case "regular":
                answer="$2.50"
                break;
            case "latte":
                 answer="$3.50"
                 break
            case "cappuccino":
                answer="$4.00"
                break
            case "espresso":
                answer="$2.50"
                break;
        }
return answer;
}

