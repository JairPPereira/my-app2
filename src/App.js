
import { BrowserRouter as Router, Switch, Route }  from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Newprojets from './components/pages/Newprojets'

function App(){
  return(
<Router>
<ul>
<li>Home</li>
<li>Contato</li>
</ul>

<p>Footer</p>

<Switch>
<Route exact path="/">

  <Home/>
</Route>
<Route exact path="/company">

  <Company/>
</Route>
<Route exact path="/newprojets">

  <Newprojets />
</Route>

<Route exact path="/contact">


<Contact/></Route>



  
</Switch>
</Router> 



)
}

export default App