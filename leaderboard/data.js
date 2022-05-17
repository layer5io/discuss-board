const axios = require("axios").default;
const fs = require("fs");
require('dotenv').config()


// import fetch from 'node-fetch';
// const fetch = require('node-fetch');

let userData;
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

async function saveUsers() {
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

// saveUsers();


function getUsers() {
  let data = fs.readFileSync('./data.json',
    { encoding: 'utf8', flag: 'r' });
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i++) {
      let username = data[i].user.username;
      users.push(username);
    }
    console.log(users);

    console.log("users has been fetched");
}


async function getSolution() {
  try {
    getUsers();
 
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
    return solutions;

  } catch (error) {
      console.log(error);
    throw error;
  }
}
  

async function saveSolutions() {
  await getSolution();
  userSolutions = JSON.stringify(solutions);
  // console.log(userData);

  fs.writeFile("./answers.json", userData, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("Arrayfile has been saved.");
  });
}

saveSolutions();
