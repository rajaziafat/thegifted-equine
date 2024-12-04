import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div className="py-20 about">
      <Helmet>
        <Heading text="Project 2-0-2-5" />
        <div className="mt-14  player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://player.vimeo.com/video/1035410273?h=63f88a9484&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            controls
          />
        </div>
      </Helmet>
    </div>
  );
};

export default Video;
