import Header from "./Header";
import useMovies from "../utlis/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../utlis/usepopular";
import useTopRated from "../utlis/useTopRated";
import useUpComingMovies from "../utlis/useUpComingMovies";

const Browse = () => {
  useMovies();
  usePopular()
  useTopRated()
  useUpComingMovies()
  return (
    <div>
      <div >
        <Header />
      </div>
      {/* Add Tailwind mt-5 for 20px margin-top */}
      <div className="mt-5">
        {/*
          MainContainer
            - videoBackground
            - videoTitle
          SecondaryContainer
            - MoviesList *n
              - cards*n
        */}
        <div>
          <MainContainer />
        </div>
        {/* Fixed typo: 'dir' to 'div' */}
        <div>
          <SecondaryContainer />
        </div>
      </div>
    </div>
  );
};

export default Browse;