import React from 'react';
import './NewsSkeleton.css'

const SkeletonNewsItem = () => {
  return (
    <div className="card my-3 skeleton-news-item">
      <div className="skeleton-badge"></div>

      <div className="skeleton-image"></div>
      <div className="card-body">
        <div className="skeleton-title"></div>
        <div className="skeleton-author"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-info"></div>
      </div>
    </div>
  );
};

export default SkeletonNewsItem;
