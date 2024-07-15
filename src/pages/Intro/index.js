import React from "react";
import AnhNen from "../../assets/anhnenhome.jpeg";
import "./intro.scss";
import { FaCircleCheck } from "react-icons/fa6";
import ReactPlayer from "react-player";

export default function Intro() {
  const [isShowVid, setIsShowVid] = React.useState(false);
  const refPlay = React.useRef();


//   React.useEffect(() => {
//     if(isShowVid) {
//         setTimeout(() => {
//             refPlay.current?.onPlay();
//         }, 500);
//     }
//   }, [isShowVid])

  return (
    <div className="wrapIntro">
      <div className="wrapbanner">
        <img src={AnhNen} alt="anhnenproduct" />
        <div className="content_banner_home f-m bl-cb">
          <h1>Creative Services For Boost Your Business Growth</h1>
        </div>
      </div>
      <div className="wrap-content-intro">
        <div className="intro">
          <div className="inf-b">
            <p className="line-t">Câu chuyện</p>
            <h2>Giới thiệu chung về công ty</h2>
            <p className="cnt">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type
            </p>
            <ul>
              <li>
                <FaCircleCheck />
                <p> Lorem Ipsum has been the industry's standard</p>
              </li>
              <li>
                <FaCircleCheck />
                <p> Lorem Ipsum has been the industry's standard</p>
              </li>
              <li>
                <FaCircleCheck />
                <p> Lorem Ipsum has been the industry's standard</p>
              </li>
            </ul>
          </div>

          <div className={`wrap-vid-intro ${isShowVid && 'reaf'}`}>
            {isShowVid ? (
              <ReactPlayer
                url={"https://www.youtube.com/embed/P0ezvfGP2ys?si=ud2jP_9CIw0F1JVg"}
                width="100%"
                ref={refPlay}
                height={"350px"}
                playing={isShowVid}
                config={{
                  file: {
                    attributes: {
                      crossOrigin: "true",
                    },
                  },
                }}
                controls
              />
            ) : (
              <>
                <img src={AnhNen} alt="sss" />
                <a className="play-btn" href="#l" onClick={() => setIsShowVid(true)} >{""}</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
