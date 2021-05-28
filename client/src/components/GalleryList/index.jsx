import {
  Link,
  Route,
  BrowserRouter as Router,
  useRouteMatch,
} from "react-router-dom";

import Gallery from "../Gallery";
import "./styles.scss";

function GalleryList({ photography, theme }) {
  const { url } = useRouteMatch();

  return (
    <ul className="GalleryList__list">
      {photography.data.map((gallery, id) => {
        return (
          <Router>
            <div>
              <li className="GalleryList__list--container" key={id}>
                <Link
                  className="GalleryList__list--link"
                  to={`${url}/${gallery.title}`}
                >
                  {gallery.title}
                </Link>
                <img
                  className="GalleryList__list--img"
                  src={gallery.galleryHeader.galleryHeaderImg}
                  alt="alt"
                ></img>
              </li>
              <Route path={`${url}/${gallery.title}`}>
                <Gallery gallery={gallery} theme={theme} />
              </Route>
            </div>
          </Router>
        );
      })}
    </ul>
  );
}

export default GalleryList;
