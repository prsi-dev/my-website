import "./styles.scss";

function Footer() {
  return (
    <div className="Footer">
      <span>
        <p>
          Developed on  
          <a className="Footer__info" href="https://reactjs.org">
            <img
              className="Footer__info--logo"
              src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731469/portfolio/assets/logos/react_jp21pm.svg"
              alt="react"
            />
          </a>{" "}
          <br />
          by Pedro Rodriguez Suárez-Infiesta
        </p>
      </span>

      <a className="Footer__info" href="https://gitlab.com/prsi.developer">
        <img
          className="Footer__info--logo"
          src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731468/portfolio/assets/logos/gitlab_xammsi.svg"
          alt="Git Lab"
        />
      </a>
      <a
        className="Footer__info"
        href="https://www.linkedin.com/in/pedro-rodriguez-su%C3%A1rez-infiesta-099b4966/"
      >
        <img
          className="Footer__info--logo"
          src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731465/portfolio/assets/logos/linkedin_czkxpd.svg"
          alt="Linked In"
        />
      </a>
      <a className="Footer__info" href="https://twitter.com/prsi_dev">
        <img
          className="Footer__info--logo"
          src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731465/portfolio/assets/logos/twitter_xktszp.svg"
          alt="Twitter"
        />
      </a>
      <a className="Footer__info" href="https://www.instagram.com/pedreee/">
        <img
          className="Footer__info--logo"
          src="https://res.cloudinary.com/dz3vpgd0m/image/upload/v1620731467/portfolio/assets/logos/instagram_tmzeol.svg"
          alt="Instagram"
        />
      </a>
    </div>
  );
}
export default Footer;
