import "./styles.scss";

function Wrap() {
  const addBox = () => {
    const newBox = document.createElement("li");
    newBox.classList.add("Box__item");

    document.getElementById("Box__container").appendChild(newBox);
  };
  const deleteBox = () => {
    document.getElementById("Box__container").lastElementChild.remove();
  };

  return (
    <div className="Wrap__window">
      <h3 className="Wrap__title">Flex-Wrap</h3>
      <p>Resize me and to try the wrap</p>
      <p>Add or delete boxes as you wish</p>
      <button
        className="Wrap__btn"
        onClick={() => {
          addBox();
        }}
      >
        Add box
      </button>
      <button
        className="Wrap__btn"
        onClick={() => {
          deleteBox();
        }}
      >
        Delete Box
      </button>

      <ul id="Box__container" className="Box__wrapper">
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
        <li id="box" className="Box__item"></li>
      </ul>
    </div>
  );
}
export default Wrap;
