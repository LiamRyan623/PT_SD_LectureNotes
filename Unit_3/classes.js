/* 
?      Classes
        - Introduced in 2015
        - A function that helps/allows us to create a specific object(s)
        - We use classes to define a category/set of objects (objects that have similar details but unique values to those details.)

        Base Structure:
        class nameOfClass {
            constructor(parameter) {
                this.key = parameter
            }

            methodName() {
                ... code block to run/execute
            }
        }
    

*/

// ex create an item class to define things sold in a store
// 1   2
class Item {
//       3               4
    constructor(name, desc, price) {
//       5     6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Class keyword that denotes what type of function we are building.
    2. Class name. Note that class names are done in Pascal Casing to help determine what type of function we are referencing later in our code.(ThisIsPascalCasing thisIsCamelCasing)
    3. Constructor keyword. This is activated when we instantiate a new object. Builds what sort of keys and values will be associated with our new object.
    4. The parameters of our constructor object. Establishes the values of our new object.
    5. This keyword - refers to "this" specific object being created.
    6. The name of a key to our new object. (in this ex, an Item object will have 3 keys: name, description, and price.)
    7. The value for those keys (referenced by the parameters.)


*/

// ex: Create a class called NewObject and instantiate/Create an object off the class
class newRoom {
    constructor(name, description) {
        this.name;
        this.desc;
    }
}

let foyer = new newRoom(
"foyer",
"description of room",
//console.log(one);
)


// Instantiate/create an object off of class Item with and without values:

let itemZero = new Item();
console.log(itemZero); // returns an object with the Item keys that hold undefined values

let itemOne = new Item("beans", "canned", .99);
console.log(itemOne);
// change thing in itemOne
itemOne.name = "spinach";
console.log(itemOne);


///TypeError: Class constructor Item cannot be invoked without 'new'
//let brokenItem = Item();
//console.log(brokenItem);


//? Factory Function
// Using a function to handle the object creation.

let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

// Build a function to process items
function processItem(itemName, desc, cost) {
    return new Item(itemName, desc, cost);
}

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);

//* Methods
// Generating our own methods for use with out objects.

class DeptInventory {
    constructor(dept) {
        this.deptartment = dept;
        this.items = []// makes a default value for this key
    }

    //     1          2
    addToInventory(newItem) {
        //3         4
        this.items.push(newItem);
        console.log("An item was added.");
        console.table(this.items);
    }
}


//5
let dryGoods = new DeptInventory("DryGoods");
let itemTwo = new Item("corn", "canned", 0.79);

//6
dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
console.log(dryGoods)


/* 
1. Establishing a name for our method.
2. This method requires a parameter.
3. "This" keyword is referencing "Dry Goods" object and adding to it's array of items.
4. Using an array method to push to the items array.
5. Generating a new dept object named dryGoods.
6. Using dot notation to target our method within our dryGoods object and passing items to it.
*/

//* Factory Methods

class expense {
    // Static keyword, create/build a new expense
    // only reachable within the class itself - not global
    static addUpchargeForProfit(wholesale) {
        // calculate the wholesale charge and store in a variable
        let upcharge = wholesale + wholesale * 0.25;
        // return (so it's accessible) the new expense
        return new expense(wholesale, upcharge);
    }
// basic constructor of the key value pairs
    constructor(w, u) {
        this.purchased_price = w;
        this.sell_at = u;
    }

    // addTax method
    addTax(x) {
        // set x value to percentage variable.
        let percentage = x;
        // set the value of sell_at to a variable.
        let saleCost = this.sell_at;

        // Write and set the tax cost
        this.plus_sales_tax = (saleCost + saleCost * percentage).toFixed(2);
    }
}

let itemToSell = expense.addUpchargeForProfit(1);
console.log(itemToSell);

let anotherItemToSell = expense.addUpchargeForProfit(2);
console.log(anotherItemToSell)

//* Class inheritance
// With each object we create those methods are included to those specific objects, basically the children inherit from the parents class.


// anotherItem has the "addTax" method due to inheritance.
anotherItemToSell.addTax(0.06);
console.log(anotherItemToSell);

// anotherItemToSell.addUpchargeForProfit(3); TypeError: anotherItemToSell.addUpchargeForProfit is not a function.

// Note: that anything that is static will not be inherited into those new objects. For our itemToSell and anotherItem, we won't have access to the addUpchargeForProfit method.