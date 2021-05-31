import { useEffect, useState } from "react";

function useAboutMe() {
  const [profile, setProfile] = useState();

  const GetAboutMe = async () => {
    try {
      const response = await fetch("/data/AboutMe");
      const jsonData = await response.json();
      setProfile(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAboutMe();
  }, []);
  return { profile };
}

export default useAboutMe;
