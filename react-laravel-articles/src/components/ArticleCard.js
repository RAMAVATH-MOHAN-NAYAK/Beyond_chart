// const React = require("react");
import React from "react";

function ArticleCard({ article, onOpen }) {
  return (
    <div className="card" onClick={() => onOpen(article)}>
      <h3>{article.title}</h3>
      <p>{article.content.slice(0,120)}...</p>
      <span className="author">{article.author}</span>
    </div>
  );
}

export default ArticleCard;