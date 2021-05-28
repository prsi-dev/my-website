import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import FrontEnd from "./pages/front-end";
import Photography from "./pages/photograhpy";
import Contact from "./pages/contact";
import NotFound from "./pages/404";

import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "./utils/ThemeManager";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log("changetheme", theme);
  return (
    <div className="App">
      <div theme={theme} className={`Theme__${theme}`}>
        <Header theme={theme} />
        <Navbar theme={theme} />
        <Switch>
          <Route path="/" exact>
            <Home theme={theme}/>
          </Route>
          <Route path="/front-end" exact>
            <FrontEnd theme={theme}/>
          </Route>
          <Route path="/photography" exact>
            <Photography theme={theme}/>
          </Route>
          <Route path="/contact" exact>
            <Contact theme={theme}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
