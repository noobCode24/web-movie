import { useParams, useSearchParams } from "react-router";
import VideoPlay from "../../components/VideoPlay";
import useFetchDetails from "../../hooks/useFetchDetails";
import { useEffect, useState } from "react";
import EpisodeBlock from "./EpisodeBlock/EpisodeBlock";

import classNames from "classnames/bind";
import styles from "./WatchMovie.module.scss";

const cx = classNames.bind(styles);
function WatchMovie() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentEpisode, setCurrentEpisode] = useState();
  const [currentEpisodeData, setCurrentEpisodeData] = useState({});
  const { data } = useFetchDetails(`/phim/${slug}`);

  useEffect(() => {
    if (searchParams) {
      setCurrentEpisode(searchParams.get("episode") - 1);
    }
  }, [searchParams]);

  useEffect(() => {
    setCurrentEpisodeData(data?.episodes[0]?.server_data[currentEpisode]);
  }, [currentEpisode, data?.episodes]);

  return (
    <div className={cx("video__wrapper")}>
      <div className={cx("video_player")}>
        <VideoPlay url={currentEpisodeData?.link_m3u8} />
      </div>
      <div className={cx("episodes_list")}>
        {
          data?.episodes[0]?.server_data?.map((episode, index) => (
            <EpisodeBlock
              key={index}
              episode={index + 1}
              isActive={index === currentEpisode}
              onClick={() => {
                setSearchParams({...searchParams, episode: index + 1 });
                setCurrentEpisode(index);
              }}
            />
          ))
        }
      </div>
    </div>
  );
}

export default WatchMovie;
