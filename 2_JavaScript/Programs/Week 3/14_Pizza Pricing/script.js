function pizzaPricing(size) {
    const basePrices = {
        small: 8.00,
        medium: 10.00,
        large: 12.00
    };

    if (!basePrices.hasOwnProperty(size)) {
        throw new Error("Invalid size. Choose from 'small', 'medium', or 'large'.");
    }

    return function(toppings) {
        const toppingPrice = 1.50;
        const numberOfToppings = toppings.length;

        return function(quantity) {
            const basePrice = basePrices[size];
            const totalToppingPrice = numberOfToppings * toppingPrice;
            const totalPrice = (basePrice + totalToppingPrice) * quantity;
            return totalPrice.toFixed(2);
        };
    };
}
