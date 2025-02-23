import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

const SearchPage = () => {
  const { query } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (query) {
      const fetch = async () => {
        const res = (
          await axios.get(
            `https://phimapi.com/v1/api/tim-kiem?keyword=${query}&limit=64`
          )
        ).data;
        setData(res?.data?.items);
      };
      fetch();
    }
  }, [query]);
  return (
    data?.length > 0 && (
      <div className='py-16'>
        <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'></div>
        <div className='container mx-auto'>
          <h1 className='text-lg font-semibold my-3'>Search Results:</h1>
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
            {data?.map((movie) => (
              <Card
                data={movie}
                key={movie.id + "search"}
                media_type={movie.media_type}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SearchPage;
