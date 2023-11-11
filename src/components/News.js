import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonNewsItem from './NewsSkeleton';
import './News.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [totalResults, setTotalResults] = useState(-1);
  const { hindi } = useParams();
  // console.log(params);
  const NEWS_API = process.env.REACT_APP_NEWS_API;
  // console.log(NEWS_API);

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  const fetchNews = async () => {
    try {
      props.setProgress(0);
      let url = `https://newsapi.in/newsapi/news.php?key=${NEWS_API}&category=${hindi}`;
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
      setLoading(true);

      let res = await axios.get(url);
      props.setProgress(30);
      // console.log(res);
      let data = await res.data.News;
      if (res.data.message === 'No news found') {
        setArticles([]);
        // setTotalResults(0);
      } else {
        props.setProgress(70);
        // console.log(data);
        setArticles(data);
        // console.log(articles);
        // setTotalResults(data.length);
      }
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hindi]);

  return (
    <div className="mainContainer">
      <h2 className="heading">Khabri Bhai- Top Headlines</h2>
      <div className="loader text-center">
        {loading && (
          <div className="containerSkeleton">
            {Array(100)
              .fill()
              .map((_, index) => (
                <SkeletonNewsItem key={index} />
              ))}
          </div>
        )}
      </div>
      {articles ? (
        articles.map((element, idx) => (
          <div className="containerNews">
            <div key={element.id}>
              <NewsItem
                imageUrl={element.image}
                title={
                  element.title ? element.title : 'Read this interesting News'
                }
                description={
                  element.description
                    ? element.description
                    : 'Click Read More to read full News'
                }
                newsUrl={element.url}
                author={element.author}
                publishedAt={element.published_date}
              />
            </div>
          </div>
        ))
      ) : (
        <h3 style={{ textAlign:"center", color:"red" }}>** No Articles Found / Your Daily Limit is Over **</h3>
      )}
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
