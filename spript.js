const listElements = document.querySelector("#githubusers");
const response = fetch("https://api.github.com/users");
response.then((res) => {
  const json = res.json();
  json.then((data) =>
    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "card flex-grow-1";
      userCard.style.width = "14rem";
      userCard.innerHTML = `
              <img src=${user.avatar_url} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${user.login}C</h5>
                <a href=${user.html_url} class="btn btn-primary">Go to profile</a>
              </div>`;
      listElements.append(userCard);
    })
  );
});
