/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./EpisodeBlock.module.scss";

const cx = classNames.bind(styles);

function EpisodeBlock({ episode, onClick, isActive }) {
  return <div onClick={onClick} className={cx("episode__block")}>{episode}</div>;
}

export default EpisodeBlock;
