
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Study from './components/Study';
import Education2 from './components/Education2';
import Health2 from './components/Health2';
import Agriculture2 from './components/Agriculture2';
import Sustainability2 from './components/Sustainability2';
function App() {
  return (
    <div>
<BrowserRouter>
      {/* <Navbar/> */}
     
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/study" component={Study}></Route>
      <Route exact path="/Education2" component={Education2}></Route>
      <Route exact path="/Health2" component={Health2}></Route>
      <Route exact path="/Agriculture2" component={Agriculture2}></Route>
      <Route exact path="/Sustainability2" component={Sustainability2}></Route>
      </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
