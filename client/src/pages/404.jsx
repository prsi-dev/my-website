import { Link } from "react-router-dom";

import "../styles/404.scss"

function NotFound() {
  return (
    <section className="NotFound">
      <h1>Not found!</h1>
      <Link to="/">Go to Home </Link>
      <Link to="/front-end">Go to Front-End </Link>
      <Link to="/photography">Go to Photography </Link>
      <Link to="/contact">Go to Contact </Link>
    </section>
  );
}

export default NotFound;
