import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>lawyer</span> for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "financial lawyer"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Civil Lawyer</button>
            <button>Copyrights</button>
            <button>Marriage Disputes</button>
            <button>Financial Lawyer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
