import './App.css';
import { Route } from 'react-router';

import Home from "./views/Home/Home"
import Projects from "./views/Projects/Projects"
function App() {
  return (
    <>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/projects"} component={Projects} />
    </>
  );
}

export default App;
