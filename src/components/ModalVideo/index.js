import * as s from "./styled";
import { CloseIcon } from "../../assets";

export const ModalVideo = ({ videoId, openModalVideo, setOpenModalVideo }) => {
  return (
    <s.ModalVideoContainer>
      <s.ModalVideoBody>
        <s.ModalVideoInner openModalVideo={openModalVideo}>
          <button onClick={() => setOpenModalVideo(false)}>
            <img src={CloseIcon} alt="" />
          </button>

          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </s.ModalVideoInner>
      </s.ModalVideoBody>
    </s.ModalVideoContainer>
  );
};
