import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    getPopularMovies();
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPopularMovies = () => {
    GlobalApi.getPopularMovies.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += element.clientWidth - 100;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= element.clientWidth - 100;
  };

  return (
    <div className="relative group">
      <HiChevronLeft
        className="hidden md:block text-4xl text-white/80 hover:text-white absolute left-2 top-[45%] z-20 cursor-pointer transition-all duration-300 shadow-lg"
        onClick={() => sliderLeft(elementRef.current)}
      />
      
      <HiChevronRight
        className="hidden md:block text-4xl text-white/80 hover:text-white absolute right-2 top-[45%] z-20 cursor-pointer transition-all duration-300 shadow-lg"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-4 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <div 
            key={item.id}
            className="relative min-w-full md:min-w-[calc(100%-100px)] flex-shrink-0 transition-all duration-300 mx-2 hover:scale-95"
          >
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.title}
              className="w-full h-[300px] md:h-[410px] object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <p className="text-gray-300 line-clamp-2">{item.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;