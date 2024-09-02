// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const port = 3000;

// Define a route that sends "Hello World" as a response
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});