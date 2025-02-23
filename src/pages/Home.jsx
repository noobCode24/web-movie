import BannerHome from "../components/BannerHome";
import useFetch from "../hooks/useFetch";
import HorizontalScollCard from "../components/HorizontalScollCard";
import { HOST, HOST_V1 } from "../config/constant";
const Home = () => {
  // const trendingData = useSelector((state) => state.movieoData.bannerData);
  // const { data: nowPlayingData } = useFetch("/movie/now_playing");
  // // const { data : trendingData } = useFetch('/movie/now_playing')
  // const { data: topRatedData } = useFetch("/movie/top_rated");
  // const { data: popularTvShowData } = useFetch("/tv/popular");
  // const { data: onTheAirShowData } = useFetch("/tv/on_the_air");

  const { data: data1 } = useFetch(HOST, "/danh-sach/phim-moi-cap-nhat", {
    page: 1,
  });
  const { data: data2 } = useFetch(HOST_V1, "/danh-sach/phim-bo", {
    limit: 30,
  });

  const { data: data3 } = useFetch(HOST_V1, "/danh-sach/phim-le", {
    limit: 30,
  });

  const { data: data4 } = useFetch(HOST_V1, "/danh-sach/hoat-hinh", {
    limit: 30,
  });

  const { data: data5 } = useFetch(HOST_V1, "/danh-sach/tv-shows", {
    limit: 30,
  });

  return (
    <div>
      <BannerHome />
      <HorizontalScollCard data={data1} heading={"New Movie Updated"} />
      <HorizontalScollCard data={data2} heading={"Series hot"} />
      <HorizontalScollCard
        data={data3}
        heading={"Featured movies"}
      />
      <HorizontalScollCard data={data4} heading={"Anime hot"} />
      <HorizontalScollCard data={data5} heading={"TV shows"} />
    </div>
  );
};

export default Home;
