function Cart() {
  this.pizzas = {};
}

let shoppingCart = new Cart;

function Pizza() {
  this.xtraCheese = false
  this.xtraLarge = false
  this.pepperoni = false
  this.sausage = false
  this.anchovi = false
  this.canadianBacon = false
  this.pineapple = false
  this.bellPepper = false
  this.pepperoncinni = false
  this.redOnion = false
}

let myPizza = new Pizza;

Pizza.prototype.order = function(xtraCheese, xtraLarge, pepperoni, sausage, anchovi, canadianBacon, pineapple, bellPepper, redOnion,pepperoncinni) {
  this.xtraCheese = xtraCheese
  this.xtraLarge = xtraLarge
  this.pepperoni = pepperoni
  this.sausage = sausage
  this.anchovi = anchovi
  this.canadianBacon = canadianBacon
  this.pineapple = pineapple
  this.bellPepper = bellPepper
  this.redOnion = redOnion
  this.pepperoncinni = pepperoncinni
}

myPizza.order(true, true, true, true, true, true, true, true, true, true)

Cart.prototype.addCart = function(eachPie) {
  this.pizzas = eachPie;
}