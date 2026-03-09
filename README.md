## Q-1. What is the difference between var, let, and const?

### var

**Definition:** `var` is a function-scoped variable declaration keyword in JavaScript that allows reassignment and redeclaration, and is hoisted with an initial value of `undefined`.

* Function-scoped (not block-scoped)
* Can be reassigned
* Can be redeclared in the same scope
* Hoisted and initialized with `undefined`
* Older way to declare variables (pre-ES6)

### let

**Definition:** `let` is a block-scoped variable declaration keyword in JavaScript that allows reassignment but does not allow redeclaration in the same scope, and is hoisted without initialization (Temporal Dead Zone).

* Block-scoped
* Can be reassigned
* Cannot be redeclared in the same scope
* Hoisted but not initialized (Temporal Dead Zone)
* Introduced in ES6

### const

**Definition:** `const` is a block-scoped variable declaration keyword in JavaScript that does not allow reassignment or redeclaration, must be initialized at declaration, and is hoisted without initialization (Temporal Dead Zone).

* Block-scoped
* Cannot be reassigned
* Cannot be redeclared in the same scope
* Must be initialized at declaration
* Hoisted but not initialized (Temporal Dead Zone)
* Introduced in ES6

---

## Q-2. What is the spread operator (...)?

**Definition:** The spread operator is a JavaScript syntax that expands (spreads) the elements of an iterable (such as an array, string, or object) into individual elements.

### Key Uses

* Expands array or string elements
* Copies or merges arrays and objects
* Passes multiple values where individual arguments are expected

---

## Q-3. What is the difference between map(), filter(), and forEach()?

### map()

**Definition:** `map()` is an array method that creates a new array by applying a transformation function to every element of the original array.

* Creates a new array
* Transforms every element of the original array
* Output array length stays the same

### filter()

**Definition:** `filter()` is an array method that creates a new array containing only the elements that satisfy a specified condition.

* Creates a new array
* Keeps only elements that match a condition
* Output array length can be smaller

### forEach()

**Definition:** `forEach()` is an array method that executes a provided function once for each array element without returning a new array.

* Does not create a new array
* Executes a function for each element
* Used for side effects (e.g., logging, updating external variables)

---

## Q-4. What is an arrow function?

**Definition:** An arrow function is a shorter syntax for writing functions in JavaScript that uses the `=>` symbol and does not have its own `this`, `arguments`, `super`, or `new.target` bindings.

### Key Characteristics

* Provides concise function syntax
* Uses lexical `this` (inherits from surrounding scope)
* Cannot be used as a constructor
* Does not have its own `arguments` object

---

## Q-5. What are template literals?

**Definition:** Template literals are a JavaScript string syntax that uses backticks ( ` ) to define strings and allows embedded expressions, multi-line strings, and string interpolation.

### Key Features

* Use backticks instead of single or double quotes
* Support embedding variables and expressions inside strings
* Allow multi-line string formatting
* Improve readability of dynamic strings
