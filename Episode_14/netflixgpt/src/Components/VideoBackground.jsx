/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { options } from '../utlis/tmbdApi';

const VideoBackground = ({ id }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await response.json();
        console.log('Fetched data:', data);

        const trailers = data.results.filter(video => video.type === "Trailer");
        if (trailers.length > 0) {
          setTrailer(trailers[0]);
        } else if (data.results.length > 0) {
          setTrailer(data.results[0]);
        } else {
          setTrailer(null);
        }
        
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetching();
  }, [id]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      {trailer ? (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}`}
          title={trailer.name}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-full bg-black flex items-center justify-center">
          <p className="text-white">Loading trailer...</p>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
