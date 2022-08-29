const axios = require('axios').default;
const fs = require('fs');
require('dotenv').config();

let url = 'https://discuss.layer5.io/directory_items.json?period=all';

alert('data.js is loaded');

async function saveUserData() {
  let response = await axios.get(url);
  userData = JSON.stringify(response.data.directory_items);
  // console.log(userData);

  fs.writeFile('./data.json', userData, 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
  });
}
saveUserData();

function resetAtMidnight() {
  let now = new Date();
  let night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day
    0,
    0,
    0 // at 00:00:00 hours
  );

  let midnight = night.getTime() - now.getTime();
  console.log(midnight);

  setInterval(async function () {
    await saveUserData(); // This function is called at midnight.
    resetAtMidnight(); // Then, reset again next midnight.
  }, midnight);
}

resetAtMidnight();
