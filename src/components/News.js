import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonNewsItem from './NewsSkeleton';
import './News.css';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadFunc = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="mainContainer">
      <h2 className="heading">Khabri Bhai- Top Headlines</h2>
      <div className="loader text-center">
        {loading && (
          <div className="containerSkeleton">
            {Array(12)
              .fill()
              .map((_, index) => (
                <SkeletonNewsItem key={index} />
              ))}
          </div>
        )}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={loadFunc}
        hasMore={articles.length !== totalResults}
        loader={
          <div className="logo">
            {' '}
            <Spinner />
          </div>
        }
      >
        <div className="containerNews">
          {/* <div className='row'> */}
          {articles.map((element) => (
            <div key={element.url}>
              <NewsItem
                imageUrl={element.urlToImage}
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
                publishedAt={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
          {/* </div> */}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
