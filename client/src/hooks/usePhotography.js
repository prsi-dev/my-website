import { useEffect, useState } from "react";
import { API_PHOTOGRAPHY } from "../constants/endpoints";

function usePhotography() {
  const [photography, setPhotography] = useState();

  useEffect(() => {
    async function GetPhotography() {
      try {
        const response = await fetch(API_PHOTOGRAPHY);
        const jsonData = await response.json();
        setPhotography(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    GetPhotography();
  }, []);

  return { photography };
}

export default usePhotography;