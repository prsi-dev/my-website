import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>Not found!</h1>
      <Link to="/">Go home </Link>
      <Link to="/front-end">Go to Front-End </Link>
      <Link to="/photography">Go to Photography </Link>
      <Link to="/contact">Go to Contact </Link>
    </section>
  );
}

export default NotFound;
