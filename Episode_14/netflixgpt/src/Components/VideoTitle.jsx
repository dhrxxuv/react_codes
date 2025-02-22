/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{title}</h1>
      <p className="text-base md:text-lg text-white max-w-lg mb-6">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300 transition duration-200">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-4 py-2 rounded font-semibold hover:bg-opacity-100 transition duration-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
