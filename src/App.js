import logo from './logo.svg';
import './App.css';
import Login from './component/logincomponent/login';
import { Routing } from './assests/js/routing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './component/header/header';
import Sidemenu from './component/sidemenu/sidemenu';
import SuperDashboard from './component/dashboards/superadmindashboard'
import { useState } from 'react';
import UserManagmnt from './component/usermanagement/usermanagement';
import TicketManagment from './component/ticketmanagement/ticketmanagment';
import Settings from './component/settings/settings';
import UserDashboard from './component/dashboards/userdashboard';
import SysticketManagment from './component/ticketmanagement/systicketmanagment';
import SysAdminDashboard from './component/dashboards/sysadmindashboard';
import Userticket from './component/ticketmanagement/ticketcreation';
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
            <Route path={Routing.TicketMananagment} element={<TicketManagment  />} />
            <Route path={Routing.Settings} element={<Settings  />} />
            <Route path={Routing.Dashboard} element={<UserDashboard  />} />
            <Route path={Routing.SysticketManagment} element={<SysticketManagment  />} />
            <Route path={Routing.SystemEngineerDashboard} element={<SysAdminDashboard  />} />
            <Route path={Routing.UserTicket} element={<Userticket  />} />
          </Routes>
      </Router>
      </div>
    )

  }
  }
export default App;
