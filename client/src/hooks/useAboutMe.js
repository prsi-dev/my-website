import { useEffect, useState } from "react";

import { API_ABOUT_URL } from "../constants/endpoints";

function useAboutMe() {
  const [profile, setProfile] = useState();

  const GetAboutMe = async () => {
    try {
      const response = await fetch(API_ABOUT_URL);
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
