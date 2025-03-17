/* eslint-disable react/prop-types */
import { useRef } from "react";
import MoviesCart from "./MoviesCart";
import { Link } from "react-router-dom"; // Fixed import (should be react-router-dom)

const MoviesList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeftStart = 0;

  // Mouse drag scrolling
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    isDragging = true;
    startX = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    isDragging = false;
    scrollContainerRef.current.style.cursor = "grab";
  };

  // Debug props
  console.log("MoviesList - title:", title);
  console.log("MoviesList - movies:", movies);

  return (
    <div className="p-2">
      {/* Netflix-style title: bold, white, larger font */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {typeof title === "string" ? title : "Untitled"} {/* Fallback if title isn’t a string */}
      </h1>
      <div className="flex">
        {/* Scrollable container with hidden scrollbar */}
        <div
          ref={scrollContainerRef}
          className="flex p-2 space-x-4 overflow-x-scroll scrollbar-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((item, index) => (
              <Link key={index} to={`/browse/movie/${item.id}`}>
                <MoviesCart poster_path={item.poster_path} />
              </Link>
            ))
          ) : (
            <p className="text-gray-400">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;