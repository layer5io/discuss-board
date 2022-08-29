let userData;
const input = document.getElementsByName('search');

let solutions = [];
let metrics = [];
let winners = [];

let postPoint = 1;
let likePoint = 2;
let solutionPoint = 3;

let baseURL = 'https://discuss.layer5.io/';
let config = {
  headers: {
    'Api-Key':
      '0deda792d73d76ec3d59b2e7d7adbfeadff0e78d3ba625afb1f828921de51c6e',
    'Api-Username': 'Lee',
  },
};

alert('indexjs is loaded');

//get data from json file
const getData = async () => {
  await fetch('./data.json', config)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      userData = data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMetrics = async () => {
  await getData();
  try {
    for (let i = 0; i < userData.length; i++) {
      let user = userData[i].user.username;
      let likes = userData[i].likes_received * likePoint;
      let posts = userData[i].post_count * postPoint;
      let acceptedAnswers = userData[i].solutions * solutionPoint;
      let profileUrl = baseURL + 'u/' + user + '/summary';
      let imgSrc =
        baseURL + userData[i].user.avatar_template.replace('{size}', '50');
      let totalPoints = likes + posts + acceptedAnswers;

      let userObject = {
        user: user,
        likes: likes,
        posts: posts,
        solutions: acceptedAnswers,
        profileUrl: profileUrl,
        imgSrc: imgSrc,
        totalPoints: totalPoints,
      };
      //push generated object in metrics array
      metrics[i] = userObject;
    }

    //sort metrics in descending order
    metrics.sort((a, b) => {
      return b.totalPoints - a.totalPoints;
    });

    //push top 5 users in winners array
    winners = metrics.slice(0, 5);
  } catch (error) {
    console.log(error);
  }
};

const renderWinners = async () => {
  await getMetrics();
  let html = '';

  winners.forEach((winner, index) => {
    let htmlSegment = `
    <tr class="table-row">
    <!-- Rank -->
                     <td class="rank">
                     <div class="rank-container">
 
                     <!-- medal -->
                     <div class="medal">
                         <img src='' alt="gold medal"> 
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
                                    <p class="user">${winner.user}</p>
                                    </a>
                                    </div>
                          </div>
      
                      </td>
      
                      <!-- Likes received -->
                      <td>${winner.likes}</td>
                      
                      <!-- Posts -->
                      <td>${winner.posts}</td>
      
                      <!-- Answered Questions -->
                      <td>${winner.solutions}</td>
      
                      <!-- Total Points -->
                      <td>${winner.totalPoints}</td>
                  </tr>
                      `;
    html += htmlSegment;
  });

  let container = document.querySelector('.winners');
  container.innerHTML = html;
};
renderWinners();

const renderAllUsers = async (result) => {
  await getMetrics();
  let html = '';
  let Allmetrics = result;

  if (Allmetrics.length === 0) {
    htmlSegment = `<div class='notFound'><p > result not found<p></div>`;
    html += htmlSegment;
  } else {
    Allmetrics.forEach((metric, index) => {
      let htmlSegment = `
                      <tr class="table-row">
                     <!-- Rank -->
                      <td class="rank">
                          <div class="rank-container">
      
                              <!-- medal -->
                              <div class="medal">
                              <img src='' alt="gold medal"> 
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
                      <td>${metric.posts}</td>
      
                      <!-- Topics Created -->
                      <td>${metric.solutions}</td>
      
                      <!-- Total Points -->
                      <td>${metric.totalPoints}</td>
                  </tr>
                  `;
      html += htmlSegment;
    });
  }
  let container = document.querySelector('.AllUsers');
  container.innerHTML = html;
};

const getFiltered = async () => {
  await getMetrics();
  let query = input[0].value;
  let result;

  if (query) {
    result = metrics.filter((metric) =>
      metric.user.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    result = metrics;
  }
  renderAllUsers(result);
};
getFiltered();

input[0].addEventListener('keyup', getFiltered);
