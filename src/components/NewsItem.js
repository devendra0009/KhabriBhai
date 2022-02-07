import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props; //destructuring
    return <>
      <div className="card my-3" >
     
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'15%', zIndex:'1'}}>{source}</span>

        <img src={imageUrl ? imageUrl : "https://www.cnet.com/a/img/J3SOjv5Md4V3KUAmc--xjNMMV3Y=/1200x630/2021/10/18/5919fe6b-343e-49a7-a740-133f077ee253/gettyimages-1235434128.jpg"} className="card-img-top" alt="Loading..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="card-author"> ---{author?author:"Investor's Business Daily"}</span>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author?author:"Investor's Business Daily"} --At {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
      </div>
    </>;
  }
}

export default NewsItem;

