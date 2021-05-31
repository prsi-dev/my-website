import "../styles/home.scss";

import useAboutMe from "../hooks/useAboutMe";

import AboutMe from "../components/AboutMe";
import { useState } from "react";

function Home({ theme }) {
  const [isvisible, setisvisible] = useState(false);

  const { profile } = useAboutMe();

  console.log(profile);
  return (
    <main className={`Home__${theme}`}>
      {profile ? (
        <div className="Home__aboutMe">
          <span
            className="Home__aboutMe--menu"
            onClick={() => setisvisible(!isvisible)}
          >
            <h5 className={`Home__aboutMe--menu--item--${theme}`}>
              <p>About Me</p>
            </h5>
          </span>

          <AboutMe
            className="About"
            profile={profile}
            isvisible={isvisible}
            setisvisible={setisvisible}
          />
        </div>
      ) : (
        <br></br>
      )}
      {!isvisible ? <h1 className="Home__title">Hello World! </h1> : <br />}
    </main>
  );
}
export default Home;
