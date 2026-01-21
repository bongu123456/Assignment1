// Test Data
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
  ];
  
  // 1. filter() only "Sci-Fi" movies
  const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
  console.log("Sci-Fi Movies:", sciFiMovies);
  
  // 2. map() to return "Title (Rating)"
  const movieTitles = movies.map(
    movie => `${movie.title} (${movie.rating})`
  );
  console.log("Movie Titles:", movieTitles);
  
  // 3. reduce() to find average movie rating
  const totalRating = movies.reduce(
    (sum, movie) => sum + movie.rating,
    0
  );
  const averageRating = totalRating / movies.length;
  console.log("Average Movie Rating:", averageRating);
  
  // 4. find() movie "Joker"
  const jokerMovie = movies.find(movie => movie.title === "Joker");
  console.log("Joker Movie:", jokerMovie);
  
  // 5. findIndex() of "Avengers"
  const avengersIndex = movies.findIndex(
    movie => movie.title === "Avengers"
  );
  console.log("Index of Avengers:", avengersIndex);  