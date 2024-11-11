class CustomIterator {
    constructor(array) {
      this.array = array; // Store the array
      this.index = 0; // Initialize the index
    }
  
    next() {
      // Check if the current index is less than the array length
      if (this.index < this.array.length) {
        // Return the current value and set done to false
        return {
          value: this.array[this.index++], // Return the current value and increment the index
          done: false // Not done yet
        };
      } else {
        // If the end of the array is reached, return done as true
        return {
          value: undefined, // No value to return
          done: true // Iteration is complete
        };
      }
    }
  }
// Create an instance of the custom iterator
const myArray = [1, 2, 3, 4, 5];
const iterator = new CustomIterator(myArray);

// Iterate using the next() method
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
class CustomIterable {
    constructor(array) {
      this.array = array; // Store the array
    }
  
    [Symbol.iterator]() {
      // Return a new instance of CustomIterator when iterated
      return new CustomIterator(this.array);
    }
  }
  
  // Create an instance of CustomIterable
  const myIterableArray = new CustomIterable([1, 2, 3, 4, 5]);
  
  // Use the for...of loop to iterate
  for (const value of myIterableArray) {
    console.log(value); // Outputs: 1, 2, 3, 4, 5
  }
    