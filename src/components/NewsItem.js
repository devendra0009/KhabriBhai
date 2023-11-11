import React from 'react';
import './NewsItem.css';
const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  publishedAt,
  source,
}) => {
  return (
    <div className="container">
      <div className="badge">
        <span>{source}</span>
      </div>

      <img
        className="newsImg"
        src={
          imageUrl
            ? imageUrl
            : 'https://www.cnet.com/a/img/J3SOjv5Md4V3KUAmc--xjNMMV3Y=/1200x630/2021/10/18/5919fe6b-343e-49a7-a740-133f077ee253/gettyimages-1235434128.jpg'
        }
        alt="news img"
      />
      <div className="details">
        <h5 className="title">{title}</h5>
        <span className="author">
          {' '}
          --{author ? author : "Investor's Business Daily"}
        </span>
        <p className="desc"> {description}</p>
        <p>
          <small>
            By {author ? author : "Investor's Business Daily"} --At{' '}
            {new Date(publishedAt).toGMTString()}
          </small>
        </p>
        <a className="readMore" href={newsUrl} target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
