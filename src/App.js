
import './App.css';
import Game from './components/Game'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game name="ewan"></Game> 
      </header>
      <div>
        <BrowserRouter>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/' exact component={Home}></Route>                  
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/detail/5">Detail</Link>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
