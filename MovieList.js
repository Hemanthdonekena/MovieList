import React, { useState } from 'react';

function MovieList() {
  // Step 3: Array of movie objects
  const movies = [
        { title: "RRR", genre: "Action", releaseYear: 2022 }, // Telugu
        { title: "Kabir Singh", genre: "Romance", releaseYear: 2019 }, // Hindi
        { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 }, // English
        { title: "Zindagi Na Milegi Dobara", genre: "Drama", releaseYear: 2011 }, // Hindi
        { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 }, // English
        { title: "Titanic", genre: "Romance", releaseYear: 1997 }, // English
        { title: "SSMB29", genre: "Action", releaseYear: 2025, language: "Telugu" }, // Upcoming super star Mahesh Babu Movie      
  ];

  // Step 4: State for the selected genre
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Step 5: Handle genre change
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // Step 6: Filter movies based on selected genre
  const filteredMovies = selectedGenre === "All Genres" ? movies : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <h1>Movie List</h1>
      {/* Genre filter dropdown */}
      <select onChange={handleGenreChange}>
        <option value="All Genres">All Genres</option>
        {Array.from(new Set(movies.map(movie => movie.genre))).map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {/* Display filtered movies */}
        {filteredMovies.map(movie => (
          <li key={movie.title} onClick={() => alert(`Movie: ${movie.title}`)}>
            <strong>{movie.title}</strong> - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
