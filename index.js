// Write your code here
// Define the Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Define the Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Define the Dinner class with a private property
  class Dinner {
    #dessert; // Private property
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; // Private property assignment
    }
  
    // Getter method for accessing the private dessert property (optional)
    getDessert() {
      return this.#dessert;
    }
  }
  
  /* Example Instances */
  const breakfast1 = new Breakfast("Pancakes", "Coffee");
  console.log(breakfast1); // Breakfast { food: 'Pancakes', drink: 'Coffee' }
  
  const lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  console.log(lunch1); // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  
  const dinner1 = new Dinner("Greek Salad", "Chicken Soup", "Steak", "Cheesecake");
  console.log(dinner1); // Dinner { salad: 'Greek Salad', soup: 'Chicken Soup', entree: 'Steak' }
  console.log(dinner1.getDessert()); // Accessing private dessert property: "Cheesecake"
  
  module.exports = { Breakfast, Lunch, Dinner };
  