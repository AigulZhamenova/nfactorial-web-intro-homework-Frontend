import React, { useEffect, useState } from 'react';

function Post() {
    const [articles, setArticles] = useState([]); 
  
    
    const getTodos = () => {
      fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl')
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.results.slice(0, 3)); 
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getTodos(); 
    }, []);
  
    return (
      <main>
        <div className="container py-5" id="world">
          <h1 className="fw-bold">Hello, world!</h1>
        </div>
        <div className="container" id="articles" style={{fontFamily: 'Inter, sans-serif', height: '1500px' }}>
          {articles.map((item, index) => {
            const publishedDate = new Date(item.created_date);
            const day = publishedDate.getDate();
            const month = publishedDate.toLocaleString('en', { month: 'long' });
            return (
              <div key={index} className="d-flex mt-5 border-bottom pb-4 flex-row gap-5" id="cont">
                <div id="article" className="d-flex flex-column gap-5">
                  <div className="d-flex gap-2">
                    <small id="author">
                      {item.byline} in {item.section}
                    </small>
                    <p className="m-0">·</p>
                    <small className="text-muted" id="data">
                      {day} {month}
                    </small>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <h3 id="title" className="fw-bold">
                      {item.title}
                    </h3>
                    <p id="body">{item.abstract}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2">
                      <small className="py-1 px-3 bg-secondary text-black rounded-5">Java Script</small>
                      <small className="text-muted py-1" id="data">
                        12 min read
                      </small>
                      <p className="m-0">·</p>
                      <small className="text-muted py-1" id="selected">
                        Selected for you
                      </small>
                    </div>
                  </div>
                </div>
                <img src={item.multimedia[0].url} alt={item.title} className="rounded-2 w-25" />
              </div>
            );
          })}
        </div>
      </main>
    );
  }
    export default Post;
  