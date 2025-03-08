//STRING ARRAY: 
var stringArray = ['C', 'C++', 'MERN', 'Next.js'];
stringArray.forEach(function (item, index) {
    console.log("".concat(index + 1, " Item : "), item);
});
var todos = [];
todos.push({ id: 1, task: 'Learn', isCompleted: false, isEditing: false });
todos.forEach(function (todo) {
    var keys = Object.keys(todo);
    keys.forEach(function (key) {
        var castKey = key;
        console.log("".concat(key, " : ").concat(todo[castKey]));
    });
});
//TUPLES IN TYPESCRIPT:
//A Tuple is a special type of array that allows you to store multiple values of different types in a fixed-size sequence.
var tuple = ['Alice', 30, true];
//You can access the elements of a tuple using indices, just like an array:
console.log(tuple[0]); // 'Alice'
console.log(tuple[1]); // 30
console.log(tuple[2]); // true
//Tuples can also have optional elements using ?:
var tupleWithOptional = ['Bob'];
console.log(tupleWithOptional); // ['Bob']
//Tuples with Rest Elements:
var tupleWithRest = ['John', 1, 2, 3];
console.log(tupleWithRest); // ['John', 1, 2, 3]
//ENUM IN TYPESCRIPT:
//An Enum is a way of defining a set of named constants. They are often used when you need to represent a collection of related values (like states, etc.)
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
//You can access the enum values by using the enum name:
console.log(Color.Red); // 'RED'
console.log(Color.Green); // 'GREEN'
//FUNCTIONS:
//FUNCTION TYPES:
function Type(name, age, display) {
    display(name, age);
}
function display(name, age) {
    console.log(name, age);
}
Type('Muhammad Bilawal', 20, display);
//OPTIONAL PARAMETERS:
function displayInfo_Optional(name, age, gender) {
    console.log(name, age, gender);
}
displayInfo_Optional('Bilawal', 20, 'Male'); //Bilawal 20 Male
displayInfo_Optional('Wasif', 20); //Wasif 20 Undefined
//DEFAULT PARAMETERS:
function displayInfo_Default(name, age, gender) {
    if (gender === void 0) { gender = 'Not To Be Disclosed'; }
    console.log(name, age, gender);
}
displayInfo_Default('Bilawal', 20, 'Male'); //Bilawal 20 Male
displayInfo_Default('Wasif', 20); //Wasif 20 Not To Be Disclosed
//REST PARAMETER:
function restParamter() {
    var numbersArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbersArray[_i] = arguments[_i];
    }
    return numbersArray.reduce(function (acc, val) { return acc + val; });
}
;
var sum = restParamter(5, 10, 15, 20);
console.log('\nSum : ', sum);
// Single implementation of the overloaded function
function add(a, b) {
    // Check if both arguments are numbers
    if (typeof a === 'number' && typeof b === 'number') {
        // Perform addition and return the result
        return a + b;
    }
    // Check if both arguments are strings
    if (typeof a === 'string' && typeof b === 'string') {
        // Perform string concatenation and return the result
        return a + b;
    }
    // If the arguments do not match the expected types, throw an error
    throw new Error('Invalid arguments. Both arguments must be of the same type and either numbers or strings.');
}
console.log(add(1, 2)); //3
console.log(add('Hello, ', 'World!')); //'Hello, World!'
//GENERIC CLASS:
var Storage_Class = /** @class */ (function () {
    function Storage_Class() {
        this.items = []; // The `items` array holds a list of `Item<T>`.
    }
    // Adds an item to the storage
    Storage_Class.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // Retrieves an item by its `id` from the storage
    Storage_Class.prototype.getItemById = function (id) {
        var item = this.items.find(function (item) { return item.id === id; });
        return item;
    };
    // Retrieves all items from the storage
    Storage_Class.prototype.getAllItems = function () {
        return this.items; // Returns all the items stored in the `items` array.
    };
    return Storage_Class;
}());
//GENERIC FUNCTION:
function display_Generic(data) {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
        return data;
    }
    console.log(data);
}
display_Generic("Hello, TypeScript!"); // Hello, TypeScript!
display_Generic(42); // 42
display_Generic({ name: "Bilawal", age: 20 }); // { name: "Bilawal", age: 20 }
