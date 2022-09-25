# Pizza Parlor

#### By _**Hans Ellis**_

#### _This a project to demonstrate my understanding of objects, their properties, and prototype functions._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_

## Description

This webpage presents the user with options to customize a pizza to their liking and then evaluate the price of their order.

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory_
* _Open index.html in your browser_
* _Make selections and click "Submit"_

## Known Bugs

* _no known bugs at this time_


## License

MIT License

Copyright (c) [2022] [Hans Ellis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Describe Cart()**

Test 1: It should create an empty "Cart" object.
```javascript
Code: function Cart() {
  this.pizzas = {};
}
```
Expected output: Cart {pizzas: {…}}

Test 2: It should add a key incrementer for multiple pizzas.
```javascript
Code: function Cart() {
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
```
Expected output: shoppingCart;
Cart {pizzas: {…}, currentId: 2}
currentId: 2
pizzas: 
1: Pizza {xtraCheese: true, xtraLarge: true, pepperoni: true, sausage: true, anchovi: true, …}
2: Pizza {xtraCheese: false, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …}

**Describe Pizza()**

Test 1: It should create a pizza object with the properties pepperoni and xtra cheese with boolean values set to 'false'.
```javascript
Code: function Pizza() {
  this.pepperoni = false
  this.xtraCheese = false 
  }
```
Expected Output: Pizza {pepperoni: false, xtraCheese: false}

Test 2: It should create a pizza object with all toppings and size options with boolean values set to 'false'.
```javascript
Code: function Pizza() {
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
```
Expected Output: Pizza {xtraCheese: false, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …}

**Describe Pizza.prototype.Order**

Test 1: It should set xtraCheese to true.
```javascript
Code: Pizza.prototype.order = function() {
   this.xtraCheese = true
}
```
Expected output: Pizza {xtraCheese: true, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …}

Test 2: It should set xtraCheese to true based on an input.
```javascript
Code: Pizza.prototype.order = function(xtraCheese) {
  this.xtraCheese = xtraCheese
}
```
Expected output: Pizza {xtraCheese: true, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …}

Test 3: It should be written to accept inputs for all properties.
```javascript
Code: Pizza.prototype.order = function(xtraCheese, xtraLarge, pepperoni, sausage, anchovi, canadianBacon, pineapple, bellPepper, pepperoncinni, redOnion) {
  this.xtraCheese = xtraCheese;
  this.xtraLarge = xtraLarge;
  this.pepperoni = pepperoni;
  this.sausage = sausage;
  this.anchovi = anchovi;
  this.canadianBacon = canadianBacon;
  this.pineapple = pineapple;
  this.bellPepper = bellPepper;
  this.pepperoncinni = pepperoncinni;
  this.redOnion = redOnion;
}
```
Expected output = Pizza {xtraCheese: true, xtraLarge: false, pepperoni: true, sausage: true, anchovi: true, …}

**Describe: Cart.prototype.addCart**

Test 1: "It should add a finished pizza object to the cart object."
```javascript
Code: Cart.prototype.addCart = function(eachPie) {
  this.pizzas = eachPie;
}
```
Expected output: Cart {pizzas: {…}}

Test 2: "it should add a pizza object with a unique key."
```javascript
Code: Cart.prototype.addCart = function(eachPie) {
  eachPie.id = this.assignId();
  this.pizzas[eachPie.id] = eachPie;
}
```
Expected output: Cart {pizzas: {…}, currentId: 2}
currentId: 2
pizzas: 
1: Pizza {xtraCheese: true, xtraLarge: true, pepperoni: true, sausage: true, anchovi: true, …}
2: Pizza {xtraCheese: false, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …} 

**Describe: Pizza.prototype.total()**

Test 1: It should evaluate the total cost of a pizza based on toppings selected.
```javascript
Code: Pizza.prototype.addUp = function () {
  let total = 20
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
  return total;
}


}