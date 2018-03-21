var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {};
  item["itemName"] = Math.floor(Math.random() * 100) + 1;
  cart.push(item);
  return cart, itemName + "has been added to your cart.";
}

function viewCart() {
  var message = 'In your cart, you have ';

  if (cart.length === 0) {
    return 'Your shopping cart is empty.';

  } else if (cart.length === 1) {
    var product = cart[0];
    message += Object.keys(cart) + " at $" + cart[Object.keys(cart)] + '.';
    return message;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
