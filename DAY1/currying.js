function discountCalculator(discount) {
    return function(price) {
      return price - (price * discount) / 100;
    };
  }
  
  const tenPercentDiscount = discountCalculator(10);
  const fifteenPercentDiscount = discountCalculator(15);
  
  console.log(tenPercentDiscount(100));  
  console.log(fifteenPercentDiscount(200));  
  