//Unmet Stretch Goal------
function Cart() {
  this.pizzas = {};
  this.currentId = 0;
}

Cart.prototype.addCart = function(eachPie) {
  eachPie.id = this.assignId();
  this.pizzas[eachPie.id] = eachPie;
}

Cart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//-------------------------
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

Pizza.prototype.addUp = function () {
  total = 20
  if (this.xtraCheese === true) {
    total += 0.5
  } if (this.xtraLarge === true) {
    total += 10
  } if (this.pepperoni === true) {
    total += 0.5
  } if (this.sausage === true) {
    total += 0.5
  } if (this.anchovi === true) {
    total += 0.5
  } if (this.canadianBacon === true) {
    total += 0.5
  } if (this.pineapple === true) {
    total += 0.5
  } if (this.bellPepper === true) {
    total += 0.5
  } if (this.redOnion === true) {
    total += 0.5
  } if (this.pepperoncinni === true) {
    total += 0.5
  }
}

//UI Logic

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let myPizza = new Pizza;
    let xtraLarge = document.getElementById("xtraLarge").checked 
    let xtraCheese = document.getElementById("xtraCheese").checked 
    let pepperoni = document.getElementById("pepperoni").checked
    let sausage = document.getElementById("sausage").checked 
    let anchovi = document.getElementById("anchovi").checked
    let canadianBacon = document.getElementById("canadianBacon").checked 
    let pineapple = document.getElementById("pineapple").checked
    let bellPepper = document.getElementById("bellPepper").checked
    let pepperoncinni = document.getElementById("pepperoncinni").checked
    let redOnion = document.getElementById("redOnion").checked
    myPizza.order(xtraLarge, xtraCheese, pepperoni, pepperoni, sausage, anchovi, canadianBacon, pineapple, bellPepper, pepperoncinni, redOnion);
    myPizza.addUp();
    console.log(total); 
    printText = "$" + total
    document.querySelector("span#output").innerText = printText;  
  });
})
