import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://news-api14.p.rapidapi.com/top-headlines?country=in&language=en&category=${category}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '92e0777d37msh14265b5cf2e6ca2p1048d8jsn3a3799025e24',
          'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setArticles(result.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles && articles.map((news, index) => {
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />;
      })}
    </div>
  );
};

export default NewsBoard;
