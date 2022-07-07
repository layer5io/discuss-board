let userData;
let baseURL = "https://discuss.layer5.io/";
let color = {
    "0":"gold",
    "1":"silver",
    "2":"#CD7F32",
    "3":"greenyellow",
    "4":"salmon"
}

async function getData(){
    await fetch("./test.json").then(response => response.json()).then(data => userData = data);
    console.log(userData);

    for(let i=0;i<5;i++){
        let imgSrc = baseURL + userData[i]["user"]["avatar_template"].replace("{size}","200");
        let cardDiv = createCardDiv(userData[i]["user"]["username"],userData[i]["likes_received"],imgSrc,color[i]);
        let leaderBoardChildDiv = document.getElementById("testDiv");
        leaderBoardChildDiv.appendChild(cardDiv);
    }

}

getData();

function createCardDiv(userName,score,imgSrc,divColor){
    let div = document.createElement("div");
    div.className = "card";
    div.style.backgroundColor = divColor;
    
    let img = document.createElement("img");
    img.loading = "lazy";
    img.src = imgSrc;
    img.classList.add("roundImage");
    img.style.height = "120px";
    img.style.width = "130px";
    div.appendChild(img);

    let nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerHTML = userName;
    div.appendChild(nameDiv);

    let scoreDiv = document.createElement("div");
    scoreDiv.className = "score";
    scoreDiv.innerHTML = "❤️ " + score;
    div.appendChild(scoreDiv);

    return div;
}