import { useState } from "react";
import LinkBox from "../../LinkBox";

import "./styles.scss";

function Navbar({ theme }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav className="HeaderNavbar">
      <button
        className={`HeaderNavbar__menu--button--${theme}`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {!isVisible ? (
          <img
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731468/portfolio/assets/logos/align-justify_yztrjq.svg"
            alt="open"
            className="HeaderNavbar__menu--button--image"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731469/portfolio/assets/logos/chevron-up_xpehvh.svg"
            alt="close"
            className="HeaderNavbar__menu--button--image"
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
