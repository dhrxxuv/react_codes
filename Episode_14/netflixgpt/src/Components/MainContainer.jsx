import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainmovie = movies[0];
  const { original_title, overview, id } = mainmovie;

  return (
<div className="relative h-screen w-full pt-20">
  <VideoBackground id={id} />
  <VideoTitle title={original_title} overview={overview} />
</div>
  );
};

export default MainContainer;
