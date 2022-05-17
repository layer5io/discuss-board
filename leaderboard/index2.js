let userData;
let solutions = [];
let metrics = [];
let winners = [];

let commentPoint = 1;
let likePoint = 2;
let solutionPoint = 3;

let baseURL = "https://discuss.layer5.io/";

async function getSolutions() {
  await fetch("./answers.json")
    .then((response) => response.json())
    .then((data) => (solution = data));

  solutions.push(solution);
  console.log(solutions);
}

async function getData() {
  try {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => (userData = data));

    console.log(userData);

    for (let i = 0; i < userData.length; i++) {
      let user = userData[i].user.username;
      let likes = userData[i].likes_received * likePoint;
      let comments = userData[i].post_count * commentPoint;
      let acceptedAnswers = solutions[0][i] * solutionPoint;
      let profileUrl = baseURL + "u/" + user + "/summary";
      let imgSrc =
        baseURL + userData[i].user.avatar_template.replace("{size}", "50");
      let totalPoints = likes + comments + acceptedAnswers;

      let userObject = {
        user: user,
        likes: likes,
        comments: comments,
        solutions: acceptedAnswers,
        profileUrl: profileUrl,
        imgSrc: imgSrc,
        totalPoints: totalPoints,
      };
      metrics.push(userObject);
    }

    console.log(metrics);
  } catch (error) {
    console.log(error);
  }
}

async function sortPoints() {
  await getSolutions();
  await getData();
  metrics.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });
//   winners.push(metrics.slice(0, 5));

//   console.log(winners);
}

const renderAllUsers = async () => {
  await sortPoints();
  let html = "";
  metrics.forEach((metric,index) => {
    let htmlSegment = `
                      <tr class="table-row">
                     <!-- Rank -->
                      <td class="rank">
                          <div class="rank-container">
      
                              <!-- medal -->
                              <div class="medal">
                                <img src="" alt="gold medal">

                              </div>
                              
                              <!-- number -->
                              <div class="rank-number">
                                  <p>${index + 1}</p>
                              </div>
                          </div>
                      </td>
                      <!-- Username -->
                      <td>
                          <div class="username-container">
                      
                            <a href=${metric.profileUrl}>
                            <div class="image-container">
                            <img src=${metric.imgSrc} alt="user image">
                            </div>
                            </a>
                            
                                <div class="username">
                                <a href=${metric.profileUrl}>
                                    <p>${metric.user}</p>
                                    </a>
                                </div>
                          </div>
      
                      </td>
      
                      <!-- Likes received -->
                      <td>${metric.likes}</td>
      
                      <!-- Posts -->
                      <td>${metric.comments}</td>
      
                      <!-- Topics Created -->
                      <td>${metric.solutions}</td>
      
                      <!-- Total Points -->
                      <td>${metric.totalPoints}</td>
                  </tr>
                      `;

    html += htmlSegment;
  });

  let container = document.querySelector(".table-body");
  container.innerHTML = html;
};

const renderWinners = async () => {
  await sortPoints();
  let html = "";
 winners[0].forEach((winner,index) => {
    let htmlSegment = `
                      <tr class="table-row">
                     <!-- Rank -->
                      <td class="rank">
                          <div class="rank-container">
      
                              <!-- medal -->
                              <div class="medal">
                                <img src="" alt="gold medal">

                              </div>
                              
                              <!-- number -->
                              <div class="rank-number">
                                  <p>${index + 1}</p>
                              </div>
                          </div>
                      </td>
                      <!-- Username -->
                      <td>
                          <div class="username-container">
                      
                            <a href=${winner.profileUrl}>
                              <div class="image-container">
                              <img src=${winner.imgSrc} alt="user image">
                              </div>
                            </a>
                            
                                <div class="username">
                                <a href=${winner.profileUrl}>
                                    <p>${winner.user}</p>
                                    </a>
                                </div>
                          </div>
      
                      </td>
      
                      <!-- Likes received -->
                      <td>${winner.likes}</td>
      
                      <!-- Comments -->
                      <td>${winner.comments}</td>
      
                      <!-- Answered Questions -->
                      <td>${winner.solutions}</td>
      
                      <!-- Total Points -->
                      <td>${winner.totalPoints}</td>
                  </tr>

                  
                      `;

    html += htmlSegment;
  });

  let container = document.querySelector(".table-body");
  container.innerHTML = html;
}

renderAllUsers();

