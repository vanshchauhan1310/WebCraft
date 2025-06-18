fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Convert to readable format
  .then(data => console.log(data))  // Show the data
  .catch(error => console.log("Error:", error));