import React, { useEffect, useState } from 'react';
import Post from './Post';

function Main() {
    const [articles, setArticles] = useState([]); 
  
    
    const getTodos = () => {
      fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl')
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.results.slice(0, 5)); 
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getTodos(); 
    }, []);
  
    return (
      <main>
        <div className="container py-5" id="world">
          <h1 >Hello, world!</h1>
        </div>
        <div className="container" id="articles">
          {articles.map((item, index) => <Post {...item} key={index}/>)}       
          
        </div>
      </main>
    );
  }
    export default Main;
  