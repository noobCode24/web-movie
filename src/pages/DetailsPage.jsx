import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import moment from "moment";
import useFetch from "../hooks/useFetch";
import useFetchDetails from "../hooks/useFetchDetails";
import Divider from "../components/Divider";
import HorizontalScollCard from "../components/HorizontalScollCard";
import VideoPlay from "../components/VideoPlay";
import { HOST_V1 } from "../config/constant";

const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useFetchDetails(`/phim/${params?.movie}`);
  console.log("🚀 ~ DetailsPage ~ data:", data);
  const { data: similarData } = useFetch(
    HOST_V1,
    `/the-loai/${data?.movie?.category[0]?.slug}`,
    {
      limit: 30,
    }
  );
  const newSimilarData = similarData?.filter(
    (item) => item._id !== data?.movie?._id
  );
  const { data: recommendationData } = useFetch(
    HOST_V1,
    `/the-loai/${data?.movie?.category[1]?.slug}`,
    {
      limit: 30,
    }
  );
  const newRecommendationData = recommendationData?.filter(
    (item) => item._id !== data?.movie?._id
  );

  const handlePlayVideo = () => {
    navigate(`/watch/${data?.movie?.slug}?episode=1`)
  };

  return (
    <div>
      <div className='w-full h-[280px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img
            src={`${data?.movie?.thumb_url}`}
            alt={`${data?.title || data?.name} backdrop`}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
      </div>

      <div className='container mt-3 mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='h-100 flex flex-col'>
          <img
            src={`${data?.movie?.poster_url}`}
            alt=''
            className='grow-1 w-60 object-cover rounded block'
          />
          <button
            onClick={() => handlePlayVideo(data)}
            className='mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all'
          >
            Play Now
          </button>
        </div>

        <div>
          <h2 className='text-2xl lg:text-4xl font-bold text-white'>
            {data?.movie?.origin_name}
          </h2>
          <p className='text-neutral-400'>{data?.tagline}</p>

          <Divider />

          <div className='flex items-center gap-3'>
            <p>Duration: {data?.movie?.time?.split(" ")[0]} minutes</p>
          </div>

          <Divider />

          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>

            <Divider />
            <div className='flex items-center gap-3 my-3 text-center'>
              <p>Status: {data?.movie?.status}</p>
              <span>|</span>
              <p>
                Release Date:
                {moment(data?.modified?.time).format("MMMM Do YYYY")}
              </p>
            </div>

            <Divider />
          </div>

          <div>
            <p>
              <span className='text-white'>Director: </span>
              {data?.movie?.director[0] || data?.movie?.director}
            </p>
          </div>

          <Divider />

          <h2 className='font-bold text-lg'>Cast:</h2>
          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
            {data?.movie?.actor?.map((item, index) => (
              <div key={index}>
                <p className='font-bold text-center text-sm text-neutral-400'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {data?.movie?.trailer_url && (
          <div className='flex-1'>
            <VideoPlay url={data?.movie?.trailer_url} />
          </div>
        )}
      </div>

      <div>
        <HorizontalScollCard data={newSimilarData} heading={`Similar Genre`} />
        <HorizontalScollCard
          data={newRecommendationData}
          heading={`Recommendation`}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
