import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeManager";

function DarkModeButton({ theme }) {
  const { toogleTheme } = useContext(ThemeContext);
  return (
    <button
      className="LinkBox__darkmode--button"
      onClick={() => {
        toogleTheme();
      }}
    >
      {theme === "Light" && "Dark" ? (
        <img
          src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620743002/portfolio/assets/logos/moon-stars_k69bzc.svg"
          alt="close"
          className="LinkBox__darkmode--button"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620741485/portfolio/assets/logos/sun_wm57d1.svg"
          alt="open"
          className="LinkBox__darkmode--button"
        />
      )}
    </button>
  );
}
export default DarkModeButton;
