# JavaScript Course

## Fondumatials

1. Declear new vars:

```js mutate vars
let age;
let javascriptIsFun = true;
javascriptIsFun = false;
age = 31;
const birthYear = 1991;
```

2. Prints

```javascript
const var = 100;
console.log(`${var}`);
```

3. Truthy and Falsey

```javascript
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Shlomo")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false
```

Example

```javascript
const money = 0;
if (money) {
  console.log("Yay you have money");
} else {
  console.log("You should get a job!!!");
}
```

4. Equality Operators: == \ != vs. === \ !==

if var is exactly equal to something, NOT preforming type correction (Strict) : ===
if var is exactly equal to something, preforming type correction (loose) : ==
** Better to avoid loose equality **

```javascript
const age = "18";
if (age === 18) console.log("You are adult (strict)");
if (age == 18) console.log("You are adult (loose)");
```

1. Logic Operatores

```javascript
const hasDriversLicense = true; // A
const hasGoodVision = true; //B
const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(hasDriversLicense); // false
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You can drive");
} else {
  console.log("Give someone else the keys");
}
// "Give someone else the keys"
```

6. Switch case

```javascript
const day = "monday";
switch (day) {
  case "monday":
    consloe.log("Its Monday baby");
    break;
  case "tuesday":
    consloe.log("Its Tureday baby");
    break;
  case "wednesday":
  case "thursday":
    consloe.log("Its Thursday");
    break;
  case "friday":
    consloe.log("Friday Party");
    break;
  case "saturday":
    consloe.log("Saturday take a break");
    break;
  case "sunday":
    consloe.log("New Week Sunday");
    break;
  default:
    consloe.log("Not valid day");
}
```

7. The Conditional (Ternary) Operator

```javascript
const age = 30;
age >= 18
  ? console.log("Im an adult now! ${👨}")
  : console.log("Im still a young boy! ${👦}");
// another example
const drink = age >= 18 ? console.log("${🍺}") : console.log("${🍼}");
console.log(drink); // 🍺
```

8. Functions

```javascript
// Function Declarations
function calculateAge(birthYear) {
  return 2022 - birthYear;
}
// Function Expressions
const calculateAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age1 = calculateAge(1991);
const age2 = calculateAge2(1991);
console.log(age1, age2);
// Arrow Function
const calculateAge3 = (bitrhYear) => 2022 - bitrhYear;
console.log(calculateAge3(1991));
const yearToWork = (birthYear, name) => {
  const age = 2022 - birthYear;
  const retire = 65 - age;
  return `${name} retire in ${retire} years`;
};
console.log(yearToWork(1991, "ShlomoG"));
```

9. Arrays

```javascript
// Method1
const animals = ["dog", "cat", "mice"];
// Method2
const numbers = new Array(1, 2, 3, 4);
// you can store both types to array
const shlomo = ["Shlomo", "Gelman", 1991, animals];
```

10. Object

```javascript
const shlomo = {
  frstName: "Shlomo",
  lastName: "Gelman",
  birthYear: 1991,
  friends: ["Dan", "Max", "Vlad"],

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};
```

11. For Loop

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`push number ${i} 🏋️‍♀️`);
}
```

# Data Structures Modern Operators and Strings

## Arreys

```javascript
const arr = [2, 3, 4];
const [x, y, z] = arr;
// 2 3 4
const [first, second] = arr;
// 2 3
const [first, , third] = arr;
// 2 4
const [second, first] = arr;
//3 2
```

In that way we can receive two results from function

```javascript
const restaurant = {
  name: "Altonio",
  starterMenu: ["Garlic Bread", "Solomon Tartar", "Caprese Salad", "Focaccia"],
  mainManu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], mainMenu[mainIndex]];
  },
};

const [starter, main] = restaurant.order(0, 2);
//"Garlic Bread"  "Risotto"
```

Nested array

```javascript
const nested = [1, 2, [3, 4]];
const [i, , [j, k]] = nested;
//1 3 4
```

Default values

```javascript
const [a = 1, b = 2, c = 3, d = 4] = [14, 15, 16];
//14 15 16
const [a = 1, b = 2, c = 3, d = 4] = [14];
// 14 2 3
```

## Objects

Lest work on this example

```javascript
const restaurant = {
  name: "Altonio",
  starterMenu: ["Garlic Bread", "Solomon Tartar", "Caprese Salad", "Focaccia"],
  mainManu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu:{
      open: 12,
      close: 20,
    },
    fri:{
      open: 11,
      close: 23,
    },
    sat:{
      open: 8,
      close: 22,
    }
  }

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIdx =1 , mainIdx = 0 , time = "20:00", addres}){
    console.log(`Order ${time}: ${this.starterMenu[starterIdx]} and ${this.mainManu[mainIdx]} to ${addres}`);
  }
};
```

destracting object:

```javascript
const { name, openingHours, starterMenu } = restaurant;
// "Altonio"
// {fri:{..}, sat:{..}, thu:{..}}
// ["Garlic Bread", "Solomon Tartar", "Caprese Salad", "Focaccia"]
```

we can define our own variables:

```javascript
const {
  name: restaurntName,
  openingHours: hours,
  starterMenu: mainRestaurntManu,
} = restaurant;

// restaurntName = "Altonio"
// hours = {fri:{..}, sat:{..}, thu:{..}}
// mainRestaurntManu = ["Garlic Bread", "Solomon Tartar", "Caprese Salad", "Focaccia"]
```

Default values

```javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
// [] because we dont have manu property in the object
// ["Garlic Bread", "Solomon Tartar", "Caprese Salad", "Focaccia"]
```

Mutating variables

```javascript
let a = 111;
let b = 999;
const obj = { a: 23, b: 5, c: 66 };
{a,b} = obj;
// SyntaxError, JS expect to recieve a code block after {a,b} and we cannt assing.
// Fix
({a,b} = obj);
// 23 5
```

Nested objects

```javascript
const { fri } = restaurant.openingHours;
// {open: 11, close:23}
const {
  fri: { open, close },
} = restaurant.openingHours;
// 11 23

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
// o = 11
// c = 23
```

Extra

```javascript
restaurant.orderDelivery({
  time: "22:30",
  addres: "KingBlaBla 12, Ashdod",
  mainIdx: 0,
  starterIdx: 2,
});
// Names should be the same between the object that passes to function and in the function. But they dont have to be in the same order!
```

## Spread operator (...)

```javascript
const arr = [7, 8, 9];
const oldBadWay = [1, 2, arr[0], arr[1], arr[2]];
const goodWay = [1, 2, ...arr];
```

when we need the elements of the arrey individualy:

```javascript
console.log(...goodWay);
```

- it is usfull to send multipule values to function
- the spead operator take all the elements from arrey and it doesnt create new variables. we can only use it in the placeswhere we would otherwisewrite valuessepareted by commas.

Use cases:

1. Shallow copy

```javascript
const mainManuCpy = [...restaurant.mainManu];
```

2. Merge 2 arreys

```javascript
const fullManu = [...restaurant.startersManu, ...restaurant.mainManu];
```

\*\*\*\*It work on iterables variables (like arreys, strings, maps, sets) not objects!

We can sent this spred operator to function, lets add method to our restorant:

```javascript
orderPasta: function(ing1,ing2,ing3){
  console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`)
}

const ingridients = [promt('Lets make pasta, Ingrideient 1?'), promt('Lets make pasta, Ingrideient 3?'), promt('Lets make pasta, Ingrideient 3?')]
orderPaste(...ingridients)
```

\*\*\* It works on objects sunce 2018

## objects

```javascript
const newResturante = { ...restaurant, foundedIn: 2000, founder: "Ben" };
```
