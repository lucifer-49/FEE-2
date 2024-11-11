// Display a greeting message (Function Declaration example)
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  function showGreeting() {
    const name = "John"; // Example name
    const message = greet(name);
    document.getElementById("greeting-output").textContent = message;
  }
  
  // Perform addition (Function Expression example)
  const add = function(a, b) {
    return a + b;
  };
  
  function showAddition() {
    const result = add(5, 3); // Example numbers
    document.getElementById("addition-output").textContent = `Result of 5 + 3 is: ${result}`;
  }
  
  // Perform multiplication (Arrow Function example)
  const multiply = (a, b) => a * b;
  
  function showMultiplication() {
    const result = multiply(4, 2); // Example numbers
    document.getElementById("multiplication-output").textContent = `Result of 4 * 2 is: ${result}`;
  }
  
  // IIFE example
  function showIIFE() {
    (function() {
      const message = "This is an IIFE running!";
      console.log(message);
      document.getElementById("iife-output").textContent = message;
    })();
  }
  