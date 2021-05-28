import "./styles.scss";

function GalleryHeader({ gallery }) {
  console.log("header", gallery);
  return (
    <div key={gallery.galleryHeader} className="Gallery__header">
      <p
        key={gallery.galleryHeader.galleryDescription}
        className="Gallery__header--description"
      >
        {gallery.galleryHeader.galleryDescription}
      </p>
    </div>
  );
}
export default GalleryHeader;
