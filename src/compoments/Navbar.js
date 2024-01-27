import React from "react";
import { useState } from "react";

function Navbar({ setSearchQuery }) {
  const [search, setSearch] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(search);
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src="assets\Standard Collection 11.png" alt=""></img>
        <span>
          <h3>KeazoN</h3>
          BOOKS
        </span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="menu">
        <li>
          <img src="assets\bx_bx-book-heart.png" />
        </li>
        <li>
          <img src="assets\ic_round-notifications-none.png" />
        </li>
        <li>
          <img src="assets\fluent_premium-person-20-regular.png" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
