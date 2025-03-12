import { useSelector } from "react-redux";
import lang from "../utlis/languageConstant";
const GptSearchBar = () => {
    const langkey  = useSelector((state)=>state.config.lang)
    return (
      <div className="flex justify-center items-center p-4  bg-opacity-80">
        <form className="flex w-full max-w-2xl">
          <input
            className="flex-grow p-3 rounded-l-lg border-0 outline-none bg-gray-800 text-white placeholder-gray-400"
            type="text"
            placeholder={lang[langkey].searchPrompt}
          />
          <button
            className="py-3 px-6 bg-red-600 text-white font-semibold rounded-r-lg hover:bg-red-700 transition-colors duration-200"
          >
            {lang[langkey].search}
          </button>
        </form>
      </div>
    );
  };
  
  export default GptSearchBar;