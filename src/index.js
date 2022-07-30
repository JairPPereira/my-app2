import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import "./index.css";
import Filme759175 from "./pages/Filme759175";
import Filme675353 from "./pages/Filme675353";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="filme759175" element={<Filme759175 />} />
          <Route path="filme675353" element={<Filme675353 />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
