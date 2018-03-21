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
    var product = cart[0];
    return 'In your cart, you have ' + Object.keys(product) + " at $" + product[Object.keys(product)] + '.';
    
    } else if (cart.length > 1) {
        for (var i = 0; i < cart.length; i++) {
          var item = cart[i];
          var itemName = Object.keys(item);

          if (i === cart.length - 1) {
            if (cart.length === 2) {
              var words = message.split(' ');
              var lastEle = words[words.length - 1];
              var chars = lastEle.split('');
              var newEle = chars.slice(0,chars.length - 1).join('');
              message = message.split(lastEle).join(newEle);
              message += ' and ' + itemName + " at $" + item[itemName] + '.';
              
            } else {
              message += ' and ' + itemName + " at $" + item[itemName] + '.';
            }
          }
          
          else {
            message += ' ' + itemName + " at $" + item[itemName] + ',';
          }
        }
      }

  return console.log(message);
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
