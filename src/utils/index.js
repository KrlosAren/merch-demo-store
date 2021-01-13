const handleSumTotal = (cart) => {
  console.log(cart);
  const reducer = (acc, cv) => acc + cv.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
