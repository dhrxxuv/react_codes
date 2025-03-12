import { useParams } from "react-router";

const MoviesDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL

  return (
    <div>
      <h2>Movie Details Page</h2>
      <p>Movie ID: {id}</p>
      {/* You can fetch and display more details about the movie using this id */}
    </div>
  );
};

export default MoviesDetails;
