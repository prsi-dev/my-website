import "../styles/photograhpy.scss";

import usePhotography from "../hooks/usePhotography";

import GalleryList from "../components/GalleryList";

function Photography({ theme }) {
  const { photography } = usePhotography();

  console.log("data", photography);

  return (
    <main className="Photography">
      <h2>Photography</h2>
      {photography ? (
        <div>
          <section className="Photography__section">
            <GalleryList photography={photography} theme={theme} />
          </section>
          <section className="Photography__section">
            <h4>More coming soon...</h4>
          </section>
        </div>
      ) : (
        <div className="OnLoad"></div>
      )}
    </main>
  );
}
export default Photography;
