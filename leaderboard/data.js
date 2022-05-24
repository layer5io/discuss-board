const axios = require("axios").default;
const fs = require("fs");
require('dotenv').config()


let users = [];
let solutions = [];
let url =
  "https://discuss.layer5.io/directory_items.json?period=all&order=likes_received";
let config = {
  headers: {
    "Api-Key":
      "0deda792d73d76ec3d59b2e7d7adbfeadff0e78d3ba625afb1f828921de51c6e",
    "Api-Username": "Lee",
  },
};

async function saveUserData() {
  let response = await axios.get(url, config);
  userData = JSON.stringify(response.data.directory_items);
  // console.log(userData);

  fs.writeFile("./data.json", userData, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}


function getUsernames() {
  try {
    saveUserData();

  let data = fs.readFileSync('./data.json',
    { encoding: 'utf8', flag: 'r' });
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i++) {
      let username = data[i].user.username;
      users.push(username);
    }
    
    console.log("users has been fetched");
    
  } catch (error) {
    console.log(error);
  throw error;
}
}

// Runs for each user and gets the number of accepted answers
async function getSolutions() {
  try {
     getUsernames();
 
    for (let user of users) {
      // console.log("I am : " ,user)
     
        const {data : response} = await axios({
          method: "get",
          url: `https://discuss.layer5.io/u/${user}.json?Api-Key=0deda792d73d76ec3d59b2e7d7adbfeadff0e78d3ba625afb1f828921de51c6e&Api-Username=Lee` 
        }) 

      let accepted_answers = response.user.accepted_answers;

    
      solutions.push(accepted_answers);
    }

    console.log("resolved:", solutions);
    // return solutions;

  } catch (error) {
      console.log(error);
    throw error;
  }
}

// Saves the Solutions from the solutions array to data2.json
async function saveSolutions() {
  await getSolutions();
  userSolutions = JSON.stringify(solutions);

  fs.writeFile("./data2.json", userSolutions, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("solutions has been saved.");
  });
}

// saveSolutions();

function resetAtMidnight() {
  let now = new Date();
  let night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day
    0, 0, 0 // at 00:00:00 hours
  )
  
  let midnight = night.getTime() - now.getTime();
  console.log(midnight);

  setInterval(async function() {
    await saveSolutions();     // This function is called at midnight.
    resetAtMidnight();        // Then, reset again next midnight.
  }, midnight);
  
}

resetAtMidnight()
