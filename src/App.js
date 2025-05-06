import logo from './logo.svg';
import './App.css';
import Login from './component/logincomponent/login';
import { Routing } from './assests/js/routing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './component/header/header';
import Sidemenu from './component/sidemenu/sidemenu';
import SuperDashboard from './component/dashboards/superadmindashboard'
import { useState } from 'react';
import UserManagmnt from './component/usermanagement/usermanagement'
function App() {

  const [sidemenuOpen , setSidemenuopen] = useState(false)

  const OpenSiemenu =()=>{
    setSidemenuopen(!sidemenuOpen)
  }

  if(window.location.pathname == '/' || window.location.pathname == Routing.Login){
    return(
      <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={Routing.Login} element={<Login />} />
        </Routes>
      </Router>
    </div>
    )
    
  }
  else{
    return(
      <div className="App">
        <Header OpenSide={OpenSiemenu}/>
        <Sidemenu Menuopen={sidemenuOpen}/>
        <Router>
          <Routes>
            <Route path={Routing.SuperDashboard} element={<SuperDashboard  />} />
            <Route path={Routing.UserManagement} element={<UserManagmnt  />} />
          </Routes>
      </Router>
      </div>
    )

  }
  }
export default App;
