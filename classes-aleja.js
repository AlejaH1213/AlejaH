class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

// Write the code that makes a black coffee object
const blackCoffee = new Coffee ("black", "no", 0)
console.log(blackCoffee);
// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());
// Write the code that makes a coffee object with 1 cream and 2 sugars
const sweetCoffee = new Coffee ("black", 1, 2)
console.log(sweetCoffee);
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(sweetCoffee.coffeeProfile());
//----------------------------------------------------------------------
// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor(flavor, milkType, numberOfshots) {
        this.flavor = flavor;
        this.milkType = milkType;
        this.numberOfshots = numberOfshots;
    }
    latteProfile () {
        return `A latte with ${this.flavor} flavor, ${this.milkType} milk and ${this.numberOfshots} shot of expresso`
    }
}
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
const regularLatte = new Latte ("regular","whole",1)
console.log(regularLatte);
// Log the regular, single shot latte's profile
console.log(regularLatte.latteProfile());
// Write the code that makes a double shot, hazelnut latte with almond milk.
const intenseLatte = new Latte ("hazelnut", "almond", "double")
console.log(intenseLatte);
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(intenseLatte.latteProfile());
//-------------------------------------------------------------------------
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
class CylinderVolumen {
    constructor (radius, height){
        this.radius = radius;
        this.height = height;
    }
    volume () {
        return 3.14 * this.radius^2 * this.height
    }
}
// Write the code that rounds the volume of the cylinder to four decimal places
const pinBall = new CylinderVolumen (10, 15)
console.log(pinBall.volume()); 
// Write the code that creates three unique cylinder objects
