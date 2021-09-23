const request = require('request');

// Fetch and print to the console
request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body)

  // Convert to object
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data)

  // Print out description
  console.log(`Cat description: ${data[0].description}`)
});
