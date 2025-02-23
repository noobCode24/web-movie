/* eslint-disable react/prop-types */
import { Link } from "react-router"
import { useSelector } from 'react-redux'
import moment from 'moment'
import { createImageURL } from "../helpers/CreateImageURL"

const Card = ({ data, trending, index, media_type }) => {
  // const imageURL = useSelector(state => state.movieoData.imageURL)

  const mediaType = data.media_type ?? media_type
  
  return (
    <Link to={`/detail/${data?.slug}`} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all'>
      {
        data?.poster_url ? (
          <img
            src={createImageURL(data?.poster_url)}
          />
        ) : (
          <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
            No image found
          </div>
        )
      }

      {/* <div className='absolute top-4 '>
        {
          trending && (
            <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
              #{index} Trending
            </div>
          )
        }
      </div> */}

      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2'>
        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.origin_name}</h2>
        <div className='text-sm text-neutral-400 flex justify-between items-center'>
          <p>{moment(data?.modified?.time).format("MMMM Do YYYY")}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
