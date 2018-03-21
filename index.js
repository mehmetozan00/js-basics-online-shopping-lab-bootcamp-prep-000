var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item_objects = {};
  var price = Math.floor(Math.random() * 100);

  item_objects.itemName = item;
  item_objects.itemPrice = price;

  cart.push(item_objects);
  return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var cartString = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length - 1 && cart.length !== 1) {
      cartString += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;

    } else if (cart.length === 1) {
      cartString += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;

    } else {
      cartString += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  }
  return cartString;
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i] === item) {
      cart.splice(cart[i], 1);
      return cart;

    } else {
      return "That item is not in your cart.";
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
