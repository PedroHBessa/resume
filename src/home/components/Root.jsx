import NavBar from "./subComponents/NavBar";
import Pages from "./subComponents/Pages";
import NavBarMobile from "./subComponents/NavBarMobile";
import "../ui/style.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = (_) => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <NavBarMobile />
        <Pages />
      </Router>
    </div>
  );
};

export default root;
