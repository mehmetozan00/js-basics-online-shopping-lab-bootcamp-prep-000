var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var item_objects = {};

  item_objects.itemName = item;
  item_objects.itemPrice = price;

  cart.push(item_objects);
  return item + " has been added to your cart.";
}

function viewCart() {
  var message = 'In your cart, you have ';

  if (cart.length === 0) {
    return 'Your shopping cart is empty.';

  } else if (cart.length === 1) {
    return "In your cart, you have " + Object.keys(item_objects) + " at $" + item_objects[Object.keys(item_objects)] + ".";
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
