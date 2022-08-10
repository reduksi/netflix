import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import { getGenres, getMovies } from "./api/movies";
import "./App.css";
import { get } from "lodash";

function App() {
  const [movieByGenre, setMovieByGenre] = useState({});

  async function fetchMovies(genre) {
    try {
      const { data } = await getMovies(get(genre, "id", 0));
      setMovieByGenre((prevState) => ({
        ...prevState,
        [get(genre, "name", "unknown")]: get(data, "results", []),
      }));
    } catch (error) {
      throw error;
    }
  }

  async function fetchGenre() {
    try {
      const {
        data: { genres },
      } = await getGenres();
      const limitGenre = genres.slice(0, 7);
      console.log(limitGenre);
      const promises = [];
      limitGenre.forEach((element) => {
        promises.push(fetchMovies(element));
      });
      await Promise.all(promises);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="heading">
          <h1>Movies</h1>
          <div className="sypnosis">
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </div>
        </div>

        {console.log(movieByGenre)}

        {Object.keys(movieByGenre).map((x, i) => (
          <div
            className="section"
            key={i}
            aria-hidden={i >= Object.keys(movieByGenre).length - 2}
          >
            <div className="title">{x}</div>
            <Carousel movies={get(movieByGenre, x, [])} />
          </div>
        ))}

        <div className="sub-warning">
          <div class="text">
            <h2>There’s even more to watch.</h2>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
            <button className="join">JOIN NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
