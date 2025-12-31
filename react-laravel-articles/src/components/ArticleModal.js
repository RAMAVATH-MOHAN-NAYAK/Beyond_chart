// const React = require("react");
import React from "react";

function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ArticleModal;