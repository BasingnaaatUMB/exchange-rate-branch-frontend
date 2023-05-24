import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Rate from './Components/Rate';
import Addrate from './Components/Addrate';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path='/addrate'>
            <Addrate></Addrate>
          </Route>
          <Route path='/'>
            <Rate></Rate>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
