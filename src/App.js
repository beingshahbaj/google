import "./App.css";
import Navbar from "./compoments/Navbar";
import BookList from "./compoments/BookList";
import { useState } from "react";
import { Routes,Route } from "react-router";
import BooksDetail from "./compoments/BooksDetail";

function App() {
   const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="main">
      <Navbar setSearchQuery={setSearchQuery} />
      <BookList searchQuery={searchQuery } />
        
     
    </div>
  );
}

export default App;
