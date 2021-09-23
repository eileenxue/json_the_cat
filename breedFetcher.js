const request = require('request');

const fetchBreedDescription = function(catBreed, callback) {
  // Fetch and print to the console
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the URL.
    // console.log(typeof body)
    
    // Edge case: What happens if the request fails
    if (error) {
      return callback(error, null);
    }

    // Convert to object
    const data = JSON.parse(body);
    
    // Edge case: If cat breed is not found
    if (data[0] === undefined) {
      return callback("Cat breed not found", null);
    }
  
    // Print out description
    return callback(null, `${data[0].name} Cat Description: ${data[0].description}`);
  });

};

module.exports = { fetchBreedDescription };
