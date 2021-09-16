import './App.css';
import { Route, Switch} from 'react-router';

import NavBar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
import Projects from "./views/Projects/Projects"
import Contact from './views/Contact/Contact';


function App() {
  return (
    <>
      <NavBar/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/projects"} component={Projects} />
          <Route exact path={"/contact"} component={Contact} />
        </Switch>
    </>
  );
}

export default App;
