import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);

  useEffect (() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a198b9ac15c44008476185c87788c9f`;
    fetch(url).then(response => response.json()).then(data=> setArticles(data.articles));
  },[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles && articles.map((news,index) => {
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  );
  
}

export default NewsBoard
