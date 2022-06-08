import React from "react";
import "./App.css";

import books from "./server/books.json";
import Card from "./components/Card/Card.js";

export default function App() {
  return (
    <div>
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