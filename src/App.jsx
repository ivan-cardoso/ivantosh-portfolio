import './App.css';
import { Route } from 'react-router';

import Home from "./views/Home/Home"

function App() {
  return (
    <>
    <Route exact path={"/"} component={Home} />
    </>
  );
}

export default App;
