import { Link } from "react-router-dom";
import DarkModeButton from "../DarkModeButton";

import "./styles.scss";

function LinkBox({ isVisible, setIsVisible, theme }) {
  return (
    <div className={`LinkBox__${theme}`}>
      <DarkModeButton theme={theme} />

      <Link
        to="/"
        className={`LinkBox__${theme}--link`}
        onClick={() => setIsVisible(!isVisible)}
      >
        Home
      </Link>
      <Link
        to="/front-end"
        className={`LinkBox__${theme}--link`}
        onClick={() => setIsVisible(!isVisible)}
      >
        Front-End
      </Link>
      <Link
        to="/photography"
        className={`LinkBox__${theme}--link`}
        onClick={() => setIsVisible(!isVisible)}
      >
        Photography
      </Link>
      <Link
        to="/contact"
        className={`LinkBox__${theme}--link`}
        onClick={() => setIsVisible(!isVisible)}
      >
        Contact
      </Link>
    </div>
  );
}
export default LinkBox;
