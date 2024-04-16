import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
      const options = {
        method: 'GET',
        
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
      <h2 className="text-center py-3">Latest <span className="badge bg-danger">News</span></h2>
      {articles && articles.map((news, index) => {
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />;
      })}
    </div>
  );
};

export default NewsBoard;
