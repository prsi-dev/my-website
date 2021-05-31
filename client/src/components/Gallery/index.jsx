import { Link } from "react-router-dom";
import GallerySwiper from "../GallerySwiper";
import GalleryHeader from "../GalleryHeader";
import "./styles.scss";

function Gallery({ gallery, theme }) {
  return (
    <div className="Gallery">
      <Link className={`Gallery__btn--close--${theme}`} to="/photography">
        X
      </Link>
      {gallery ? (
        <div className="Gallery__container">
          <GalleryHeader gallery={gallery} />
          <GallerySwiper gallery={gallery} />
          <hr />
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default Gallery;
