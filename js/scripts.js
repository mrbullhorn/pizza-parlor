function Cart() {
  this.pizzas = {};
}

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

Pizza.prototype.order = function(xtraCheese) {
  this.xtraCheese = xtraCheese
}