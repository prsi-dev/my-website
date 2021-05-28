import HeaderNavbar from "../Header/HeaderNavbar";
import "./styles.scss";

function Header({ theme }) {
  return (
    <div className="Header">
      <div className="Header__links">
        <HeaderNavbar theme={theme} />
        <a className="Header__link" href="https://gitlab.com/prsi.developer">
          <img
            className={`Header__link--logo--${theme}`}
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731468/portfolio/assets/logos/gitlab_xammsi.svg"
            alt="Git Lab"
          />
        </a>
        <a
          className="Header__link"
          href="https://www.linkedin.com/in/pedro-rodriguez-su%C3%A1rez-infiesta-099b4966/"
        >
          <img
            className={`Header__link--logo--${theme}`}
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731465/portfolio/assets/logos/linkedin_czkxpd.svg"
            alt="Linked In"
          />
        </a>
        <a className="Header__link" href="https://twitter.com/prsi_dev">
          <img
            className={`Header__link--logo--${theme}`}
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731465/portfolio/assets/logos/twitter_xktszp.svg"
            alt="Twitter"
          />
        </a>
        <a className="Header__link" href="https://www.instagram.com/pedreee/">
          <img
            className={`Header__link--logo--${theme}`}
            src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731467/portfolio/assets/logos/instagram_tmzeol.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}
export default Header;
