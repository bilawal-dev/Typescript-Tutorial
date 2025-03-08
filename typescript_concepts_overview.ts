//STRING ARRAY: 
const stringArray: string[] = ['C', 'C++', 'MERN', 'Next.js'];

stringArray.forEach((item: string, index: number): void => {
    console.log(`${index + 1} Item : `, item);
});


//ARRAY FOR OBJECT:
interface Todo {
    id: number,
    task: string,
    isCompleted: boolean,
    isEditing: boolean,
}

const todos: Todo[] = [];

const mondayTodo = {
    id: 1,
    task: 'Learn',
    isCompleted: false,
    isEditing: false
}

todos.push(mondayTodo);

todos.forEach((todo: Todo): void => {
    const keys: string[] = Object.keys(todo);

    keys.forEach((key: string) => {
        const castKey = key as keyof Todo;
        console.log(`${key} : ${todo[castKey]}`);
    })
});


//TUPLES IN TYPESCRIPT:

//A Tuple is a special type of array that allows you to store multiple values of different types in a fixed-size sequence.
let tuple: [string, number, boolean] = ['Alice', 30, true];

//You can access the elements of a tuple using indices, just like an array:
console.log(tuple[0]);  // 'Alice'
console.log(tuple[1]);  // 30
console.log(tuple[2]);  // true

//Tuples can also have optional elements using ?:
let tupleWithOptional: [string, number?, boolean?] = ['Bob'];
console.log(tupleWithOptional);  // ['Bob']

//Tuples with Rest Elements:
let tupleWithRest: [string, ...number[]] = ['John', 1, 2, 3];
console.log(tupleWithRest);  // ['John', 1, 2, 3]


//ENUM IN TYPESCRIPT:

//An Enum is a way of defining a set of named constants. They are often used when you need to represent a collection of related values (like states, etc.)
enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
}

//You can access the enum values by using the enum name:
console.log(Color.Red);  // 'RED'
console.log(Color.Green);  // 'GREEN'


//FUNCTIONS:

//FUNCTION TYPES:
function Type(name: string, age: number, display: (name: string, age: number) => void): void {
    display(name, age);
}

function display(name: string, age: number): void {
    console.log(name, age);
}

Type('Muhammad Bilawal', 20, display);

//OPTIONAL PARAMETERS:
function displayInfo_Optional(name: string, age: number, gender?: string): void {
    console.log(name, age, gender);
}

displayInfo_Optional('Bilawal', 20, 'Male'); //Bilawal 20 Male
displayInfo_Optional('Wasif', 20); //Wasif 20 Undefined

//DEFAULT PARAMETERS:
function displayInfo_Default(name: string, age: number, gender: string = 'Not To Be Disclosed'): void {
    console.log(name, age, gender);
}

displayInfo_Default('Bilawal', 20, 'Male'); //Bilawal 20 Male
displayInfo_Default('Wasif', 20); //Wasif 20 Not To Be Disclosed

//REST PARAMETER:
function restParamter(...numbersArray: number[]): number {
    return numbersArray.reduce((acc, val) => acc + val);
};

const sum: number = restParamter(5, 10, 15, 20);
console.log('\nSum : ', sum);

//FUNCTION OVERLOADING IN TS:

//Define function signatures (overloads). These signatures describe the different ways the function can be called
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Single implementation of the overloaded function
function add(a: any, b: any): any {
    //THIS IS ALSO CALLED TYPE GUARDS AND TYPE NARROWING:
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

console.log(add(1, 2));  //3
console.log(add('Hello, ', 'World!'));  //'Hello, World!'

// console.log(add(1, '2'));  // This will throw an error at runtime


//GENERICS:

//GENERIC INTERFACE:
interface Item<T> {
    id: number;
    value: T; // The `value` property can be any type specified when using the `Item` interface.
}

//GENERIC CLASS:
class Storage_Class<T> {
    private items: Item<T>[] = [];  // The `items` array holds a list of `Item<T>`.

    // Adds an item to the storage
    addItem(item: Item<T>): void {
        this.items.push(item);
    }

    // Retrieves an item by its `id` from the storage
    getItemById(id: number): Item<T> | undefined {
        return (this.items.filter((item) => item.id === id))[0];
    }

    // Retrieves all items from the storage
    getAllItems(): Item<T>[] {
        return this.items;  // Returns all the items stored in the `items` array.
    }
}

//GENERIC FUNCTION:
function display_Generic<T>(data: T): string | void {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
        return data;
    }
    console.log(data);
}

display_Generic("Hello, TypeScript!"); // Hello, TypeScript!
display_Generic(42); // 42
display_Generic({ name: "Bilawal", age: 20 }); // { name: "Bilawal", age: 20 }


//TYPE ASSERTIONS:
let anotherValue: any = "another string";

// Using `as` syntax for type assertion
let anotherStrLength: number = (anotherValue as string).length;

console.log(anotherStrLength); // Output: 14


//TYPEGUARDS:
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    // Using instanceof to narrow down the type
    if (animal instanceof Dog) {
        // Here, TypeScript knows `animal` is a Dog
        animal.bark();
    } else if (animal instanceof Cat) {
        // Here, TypeScript knows `animal` is a Cat
        animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);  // Output: Woof!
makeSound(cat);  // Output: Meow!