import TicTacBoard from "../components/TicTacToeBoard";

import "../styles/frontend.scss";

import ToDoList from "../components/ToDoList/ToDoList";
/* import RockPaperScissors from "../components/RockPaperScissors"; */
import Wrap from "../components/Wrap";

function FrontEnd({ theme }) {
  return (
    <main className="FrontEnd">
      <h2>Front End</h2>
      <section className="FrontEnd__section">
        <h2>Object Oriented Programming</h2>
        <p>
          This Website is fully developed with React library and Node back-end,
          for more technical info about this site please visit the GitLab link
          above. <br />
          <br />
          This Website is responsive and designed in a mobile-first concept.
          <br />
          <br />
          For more info feel free to contact me on the contact section.
          <br />
          <br />
          Here are more Html, CSS and Javascript Object oriented programming
          examples.
        </p>
      </section>
      <section className="FrontEnd__section">
        <Wrap />
      </section>
      <section className="FrontEnd__section">
        <h1>To Do List</h1>
        <p>This ToDo list works with lowdb database which works with the local storage of your browser. </p>
        <p>Add, complete or search a task</p>
        <ToDoList theme={theme} />
      </section>
      <section className="FrontEnd__section">
        <h1>Tic Tac Toe</h1>
        <p>Classic game based on an Javascript logic working with arrays</p>
        <TicTacBoard />
      </section>
      {/* <section className="FrontEnd__section">
        <h1> Rock Paper Scissors</h1>
        <RockPaperScissors />
      </section> */}
    </main>
  );
}

export default FrontEnd;
