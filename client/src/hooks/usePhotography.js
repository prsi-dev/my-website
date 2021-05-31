import { useEffect, useState } from "react";

function usePhotography() {
  const [photography, setPhotography] = useState();

  useEffect(() => {
    async function GetPhotography() {
      try {
        const response = await fetch("/data/photography");
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
