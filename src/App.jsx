import './App.css';
import { Route, Switch} from 'react-router';

import NavBar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
import Projects from "./views/Projects/Projects"
function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/projects"} component={Projects} />
      </Switch>
    </>
  );
}

export default App;
