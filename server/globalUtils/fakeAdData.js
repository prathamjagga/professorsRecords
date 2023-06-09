const Chance = require("chance");
const Advertisement = require("./models/Advertisement");
const chance = new Chance();

// Array to hold the generated data
async function addFakeAdDataToDB() {
  const adsData = [];

  // Loop to generate 50 objects
  for (let i = 0; i < 200; i++) {
    const company = chance.company();
    const headline = chance.sentence({ words: 4 });
    const primaryText = chance.sentence({ words: 8 });
    const desc = chance.paragraph();

    // Create an object and push it to the array
    const ad = {
      company,
      headline,
      primaryText,
      desc,
    };

    adsData.push(ad);
  }

  await Advertisement.create(adsData);
}

module.exports = { addFakeAdDataToDB };
