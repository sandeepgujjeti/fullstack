import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Login from './Login';
import About from './Aboutus';
import Signup  from './Signin';


function Header(){
  return(
    <ul className="list-unstyled d-flex gap-3 fixed-top left-50">
      <li><Link to="/">Login</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  )
}
function App(){
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;