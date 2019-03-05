import React, { Component } from "react";
import { BrowserRouter as Router,NavLink, Route} from "react-router-dom";
import Accueil from "./component/Accueil";
import Apropos from "./component/Apropos";
import Contact from "./component/Contact";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
          <ul className="header">
            <li><NavLink to="/Accueil">Accueil</NavLink></li>
            <li><NavLink to="/Apropos" >Apropos</NavLink></li>
            <li><NavLink to="/contact" >contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Accueil}/>
            <Route path="/Accueil" component={Accueil}/>
            <Route path="/Apropos" component={Apropos}/>
            <Route path="/Contact" component={Contact}/>
          </div>
          <footer>
          <p> copyright &copy;rado</p>
          </footer>
          
        </div>
      </Router>
    );
  }
}
export default App;