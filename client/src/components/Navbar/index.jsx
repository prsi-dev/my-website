import { useState } from "react";
import LinkBox from "../LinkBox";

import "./styles.scss";

function Navbar({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="Navbar">
      <button
        id="button"
        className="Navbar__menu--button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {!isVisible ? (
          <img
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731467/portfolio/assets/logos/plus-circle_nkyrxg.svg"
            alt="open"
            className="Navbar__menu--button--image"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731467/portfolio/assets/logos/x-circle_kmjwkl.svg"
            alt="close"
            className="Navbar__menu--button--image"
          />
        )}
      </button>
      {isVisible && (
        <LinkBox
          theme={theme}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
    </nav>
  );
}
export default Navbar;
