console.log("T1");

const axios = require('axios').default;
const fs = require('fs');

let userData;
let url = 'https://discuss.layer5.io/directory_items.json?period=all&order=likes_received';
let config = {
  headers: {
    'Api-Key': '0deda792d73d76ec3d59b2e7d7adbfeadff0e78d3ba625afb1f828921de51c6e',
    'Api-Username': 'Lee'
  }
}

async function t1(){
let data = await axios.get(url, config);
userData = JSON.stringify(data.data["directory_items"].slice(0,10));
console.log(userData);

fs.writeFile("./test.json", userData, 'utf8', function (err) {
  if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
  }

  console.log("JSON file has been saved.");
});
}

t1();

console.log("T2");