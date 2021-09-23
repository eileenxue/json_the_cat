const request = require('request');

// Get breed dynamically from command-line arguments
const argv = process.argv.slice(2);
const catBreed = argv[0];

// Fetch and print to the console
request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the URL.
  // console.log(typeof body)

  // Convert to object
  const data = JSON.parse(body);

  // Edge case: What happens if the request fails
  if (error) {
    return console.log(error);
  }
  
  // Edge case: If cat breed is not found
  if (data[0] === undefined) {
    return console.log("Cat breed not found");
  }

  // Print out description
  console.log(`${data[0].name} Cat Description: ${data[0].description}`);
});
