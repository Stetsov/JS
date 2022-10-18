/*01-is-plain-object
* Task description: Write a method that verifies an argument is a plain object, not an array or null
* Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
02-make-pairs
* Task description: Write a method that returns a deep array like [[key, value]]
* Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
03-without
* Task description: Write a method that returns a new object without provided properties
* Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
04-is-empty
* Task description: Write a method that makes a shallow check is object empty
* Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
05-is-equal
* Task description: Write a method that makes a shallow compare of two objects
* Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
06-invoke
* Task description: Write a method that invokes an array method on a specific path
* Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
07-is-empty-deep
* Task description: Write a method that makes a deep check is an object empty
* Empty values: '', null, NaN, undefined, [], {}
08-is-equal-deep
* Task description: Write a method that makes a deep compare of two objects
* Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
09-intersection
* Task description: Write a method that finds shallow intersections of objects
* Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
10-intersection-deep
* Task description: Write a method that finds all intersections of objects
* Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
/
 */