const { fetchBreedDescription } = require('./breedFetcher');

// Get breed dynamically from command-line arguments
const argv = process.argv.slice(2);
const catBreed = argv[0];

fetchBreedDescription(catBreed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
