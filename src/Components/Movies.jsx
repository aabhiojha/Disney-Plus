import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function Movies() {
  const [topMovies, setTopMovies] = useState([]);
  const posterImgBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = () => {
    GlobalApi.getTopRatedMovies.then((response) => {
      setTopMovies(response.data.results);
    });
  };

  return (
    <>
      <h1 className="text-5xl mx-16 px-8 py-4 my-8">Top Rated</h1>
      <div className="flex flex-wrap gap-4 ml-16 px-8 mr-16 w-full">
        {topMovies.map((item) => (
          <div 
            key={item.id}
            className="relative group overflow-hidden rounded w-[300px] m-2 transition-all duration-300"
          >
            <img
              src={posterImgBaseUrl + item.poster_path}
              alt="Movie Poster"
              className="rounded w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
              <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
              <p className="text-gray-300">Release date: {item.release_date}</p>
              <p className="text-gray-300">Rating: {item.vote_average}/10</p>
              <p className="text-gray-300">Votes: {item.vote_count}</p>
              <p className="text-gray-300">Language: {item.original_language.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;