/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const products = [
  {
    name: "Cherry",
    price: 1.99,
    quantity: 0,
    productId: 101,
    image: "./images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 2.49,
    quantity: 0,
    productId: 102,
    image: "./images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 3.29,
    quantity: 0,
    productId: 103,
    image: "./images/strawberry.jpg",
  },
  {
    name: "Pomegranate",
    price: 3.99,
    quantity: 0,
    productId: 104,
    image: "./images/pomegranate.jpg", // - pomegranate.jpg by Mustafa Akin
  },
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      if (!cart.includes(products[i])) {
        // Set quantity to 1 and add product to cart if not already present
        products[i].quantity = 1;
        cart.push(products[i]);
      } else {
        // Increase quantity if product is already in cart
        products[i].quantity++;
      }
      break;
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      // Increase the quantity of the product
      products[i].quantity++;
      break;
    }
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      if (products[i].quantity > 0) {
        // Decrease the quantity of the product
        products[i].quantity--;
        if (products[i].quantity === 0) {
          // Remove product from cart if quantity reaches 0
          for (let j = 0; j < cart.length; j++) {
            if (cart[j].productId === productId) {
              cart.splice(j, 1);
              break;
            }
          }
        }
      }
      break;
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      // Set product quantity to 0
      products[i].quantity = 0;
      // Remove product from cart
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].productId === productId) {
          cart.splice(j, 1);
          break;
        }
      }
      break;
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
// Calculate the total cost of products in the cart
function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    // Calculate item total and format to two decimal points
    let itemTotal = (cart[i].price * cart[i].quantity).toFixed(2);
    // Convert item total back to a number
    itemTotal = parseFloat(itemTotal);
    // Add formatted item total to the running total
    total += itemTotal;
  }
  // Finally, ensure the overall total is rounded to two decimal points before returning
  return parseFloat(total.toFixed(2));
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
  for (let i = 0; i < products.length; i++) {
    // Reset product quantities to 0
    products[i].quantity = 0;
  }
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
// Calculate the remaining balance after payment
function pay(amount) {
  const total = cartTotal();
  const remainingBalance = parseFloat((amount - total).toFixed(2));
  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
