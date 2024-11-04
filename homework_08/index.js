// const articles = [
//   {
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//   },
//   {
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//   },
// ];


// const articlesCotainer = document.getElementById("articles");

// let article = 
//     `<div class="d-flex mt-5">
//         <div id="article">
//             <p id="author">Authors name in Topics Name</p>
//             <h3 id="title"></h3>
//             <p id="body"></p>
//         </div>
//         <img src="./assets/Img.png" alt="picture">
//     </div>`


// function getArticlesFromAPI() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(articles), 3000)
//     })
// }


// function getArticleHTML (item) {
//     return 
//         `<div class="d-flex mt-5">
//             <div id="article">
//                 <p id="author">Authors name in Topics Name</p>
//                 <h3 id="title">${item.title}</h3>
//                 <p id="body">${item.body}</p>
//             </div>
//             <img src="./assets/Img.png" alt="picture">
//         </div>`
    
// }

// getArticlesFromAPI()
//     .then((res) => {
//         const loader = document.getElementById("loader");
//         loader.remove()
//         res.forEach((item) => {
//             // article = article.replace('id="title">', id="title">${item.title})
//             // article = article.replace('id="body">', id="body">${item.title})

//             // articlesCotainer.append(article)
//             articlesCotainer.innerHTML += getArticleHTML(item);
//             // articlesCotainer.innerHTML += article;
//         })
//     })

  
  const articlesCotainer = document.getElementById("articles");

  function getTodos(){
    // FETCH GET
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl')
    .then(function(promise){
      return promise.json()
    })
    .then(function(data){
      console.log(data);
      data.results.splice(0,3).forEach(item=>{
        const publishedDate = new Date(item.created_date); 
        const day = publishedDate.getDate();
        const month = publishedDate.toLocaleString('en', { month: 'long' });
        articlesCotainer.innerHTML += `
        <div class="d-flex mt-5 g-4 border-bottom pb-4 gap-8" id="cont">
            <div id="article" class ="d-flex flex-column gap-5">
                <div class="d-flex gap-2">
                  <small id="author"> ${item.byline} in ${item.section} </small>
                  <p class="m-0">·</p>
                  <small class="text-muted" id ="data">${day} ${month}</small>
                </div>
                <div class="d-flex flex-column gap-3">
                  <h3 id="title" class="fw-bold">${item.title}</h3>
                  <p id="body">${item.abstract}</p>
                </div>                
                <div class="d-flex justify-content-between"> 
                  <div class="d-flex gap-2">
                    <small class="py-1 px-3 bg-secondary text-black rounded-5">Java Script</small>
                    <small class="text-muted py-1" id ="data">12 min read </small>
                    <p class="m-0">·</p>
                    <small class="text-muted py-1" id ="selected">Selected for you</small>
                  </div>
                </div>
            </div>
            <img src="${item.multimedia[0].url}" alt="picture" class="rounded-2 w-25">
          </div>
    `;})
    })
    .catch(e=>console.log(e))
  }
  
  getTodos();