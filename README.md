**Decscribe Cart()**
Test 1: It should create an empty "Cart" object.
```javascript
Code: function Cart() {
  this.pizzas = {};
}
```
Expected output: Cart {pizzas: {…}}

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

**Describe Pizza.prototype.addCart**
Test 1: It should set xtraCheese to true.
```javascript
Code: Pizza.prototype.addCart = function() {
   this.xtraCheese = true
}
```
Expected output: Pizza {xtraCheese: true, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …}

Test 2: It should set xtraCheese to true based on an input.
```javascript
Code: Pizza.prototype.addCart = function(xtraCheese) {
  this.xtraCheese = xtraCheese
}
```
Expected output: Pizza {xtraCheese: true, xtraLarge: false, pepperoni: false, sausage: false, anchovi: false, …}

Test 3: It should be written to accept inputs for all properties.
```javascript
Code: Pizza.prototype.addCart = function(xtraCheese, xtraLarge, pepperoni, sausage, anchovi, canadianBacon, pineapple, bellPepper, pepperoncinni, redOnion) {
  this.xtraCheese = xtraCheese
  this.xtraLarge = xtraLarge
  this.pepperoni = pepperoni
  this.sausage = sausage
  this.anchovi = anchovi
  this.canadianBacon = canadianBacon
  this.pineapple = pineapple
  this.bellPepper = bellPepper
  this.pepperoncinni = pepperoncinni
  this.redOnion = redOnion
}
```
Expected output = Pizza {xtraCheese: true, xtraLarge: false, pepperoni: true, sausage: true, anchovi: true, …}