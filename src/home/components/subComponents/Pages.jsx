import Home from "../Home";
import News from "../News";
import Blog from "../Blog";
import Contato from "../Contato";
import Portfolio from "../Portfolio";
import { Switch, Route } from "react-router-dom";
import "../../ui/style.css";

export default function Pages() {
  return (
    <div className="pages">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
    </div>
  );
}
