import React, { useEffect, useState } from "react";

import {
  getOriginalArticles,
  getEnhancedArticles
} from "../api/articleApi";

import ArticleCard from "../components/ArticleCard";
import ArticleModal from "../components/ArticleModal";
import Loader from "../components/Loader";

function ArticlesPage() {
  const [tab, setTab] = useState("original");
  const [original, setOriginal] = useState([]);
  const [enhanced, setEnhanced] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function load() {
      const [o, e] = await Promise.all([
        getOriginalArticles(),
        getEnhancedArticles()
      ]);
      setOriginal(o);
      setEnhanced(e);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
  getOriginalArticles()
    .then(data => console.log("API DATA:", data))
    .catch(err => console.error("API ERROR:", err));
}, []);

  if (loading) return <Loader />;

  const data = tab === "original" ? original : enhanced;

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={tab === "original" ? "active" : ""}
          onClick={() => setTab("original")}
        >
          Original Articles
        </button>
        <button
          className={tab === "enhanced" ? "active" : ""}
          onClick={() => setTab("enhanced")}
        >
          Updated Articles
        </button>
      </div>

      <div className="grid">
        {data.map((a) => (
          <ArticleCard key={a.id} article={a} onOpen={setSelected} />
        ))}
      </div>

      <ArticleModal
        article={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default ArticlesPage;









// const React = require("react");
// const { useEffect, useState } = React;

// const {
//   getOriginalArticles,
//   getEnhancedArticles
// } = require("../api/articleApi");

// const ArticleCard = require("../components/ArticleCard");
// const ArticleModal = require("../components/ArticleModal");
// const Loader = require("../components/Loader");

// function ArticlesPage() {
//   const [tab, setTab] = useState("original");
//   const [original, setOriginal] = useState([]);
//   const [enhanced, setEnhanced] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     async function load() {
//       const [o, e] = await Promise.all([
//         getOriginalArticles(),
//         getEnhancedArticles()
//       ]);
//       setOriginal(o);
//       setEnhanced(e);
//       setLoading(false);
//     }
//     load();
//   }, []);

//   if (loading) return <Loader />;

//   const data = tab === "original" ? original : enhanced;

//   return (
//     <div className="container">
//       <div className="tabs">
//         <button className={tab==="original"?"active":""} onClick={()=>setTab("original")}>
//           Original Articles
//         </button>
//         <button className={tab==="enhanced"?"active":""} onClick={()=>setTab("enhanced")}>
//           Updated Articles
//         </button>
//       </div>

//       <div className="grid">
//         {data.map(a => (
//           <ArticleCard key={a.id} article={a} onOpen={setSelected} />
//         ))}
//       </div>

//       <ArticleModal article={selected} onClose={() => setSelected(null)} />
//     </div>
//   );
// }

// module.exports = ArticlesPage;