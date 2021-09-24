// Testing Cat Breed Fetcher

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
    
  });

  // Test another breed
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siamese', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
    
  });

  // Test case for invalid breed
  it('returns error description for invalid breed', (done) => {
    fetchBreedDescription('coolcat', (err, desc) => {
      
      // The description returns null when breed is invalid
      assert.equal(null, desc);

      // The error message returned
      const expectedDesc = "Cat breed not found";
      assert.equal(expectedDesc, err);

      done();
    });
  });
});

// Edge case: If cat breed is not found
// if (data[0] === undefined) {
//   return callback("Cat breed not found", null);
// }