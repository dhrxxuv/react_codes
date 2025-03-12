import GptSearchBar from "./GptSearchBar";
import { bg_Img } from "../utlis/backgeoundImg";

const GptSearch = () => {
  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          src={bg_Img}
          alt="Background"
        />
      </div>

      {/* GptSearchBar */}
      <div className="relative z-10 mt-40"> {/* Add margin-top and ensure it's above the background */}
        <GptSearchBar />
      </div>
    </>
  );
};

export default GptSearch;