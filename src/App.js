import React from "react";
import "./App.css";

import books from "./server/books.js";
import Card from "./components/Card/Card.js";

export default function App() {
  return (
    <div className="App">
      {books.map(book => 
            <Card
            name={book.title}
            author={book.author}
            year={book.published}
            isbn={book.isbn} />
          )}
    </div>
    )
}