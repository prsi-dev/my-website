import "./styles.scss";

function AboutMe({ profile, isvisible, setisvisible }) {
  return (
    <div className="About__section--container" isvisible={(isvisible = "true")}>
      <section id="profile" className="About__section--profile">
        <h4 className="About__section--title" key={profile.name}>
          {profile.data.aboutMe.homeTitle}
        </h4>
        <img
          src={profile.data.aboutMe.profileImageUrl}
          alt="profilepic"
          className="About__profileImg"
        ></img>
        <p
          className="About__section--description"
          key={profile.homeDescription}
        >
          {profile.data.aboutMe.homeDescription}
        </p>
      </section>
      <section id="aboutMe" className="About__section">
        <img
          src={profile.data.aboutMe.homeAboutDescriptionImageUrl}
          alt="profilepic"
          className="About__section--descriptionBanner"
        ></img>
        <h4 className="About__section--title" key={profile.homeAboutTitle}>
          {profile.data.aboutMe.homeAboutTitle}
        </h4>
        <p
          className="About__section--description"
          key={profile.homeAboutDescription}
        >
          {profile.data.aboutMe.homeAboutDescription}
        </p>
        <br />
      </section>
    </div>
  );
}
export default AboutMe;
