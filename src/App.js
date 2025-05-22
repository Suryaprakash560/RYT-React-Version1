import logo from './logo.svg';
import './App.css';
import Login from './component/logincomponent/login';
import { Routing } from './assests/js/routing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './component/header/header';
import Sidemenu from './component/sidemenu/sidemenu';
import SuperDashboard from './component/dashboards/superadmindashboard'
import { useEffect, useState } from 'react';
import UserManagmnt from './component/usermanagement/usermanagement';
import TicketManagment from './component/ticketmanagement/ticketmanagment';
import Settings from './component/settings/settings';
import UserDashboard from './component/dashboards/userdashboard';
import SysticketManagment from './component/ticketmanagement/systicketmanagment';
import SysAdminDashboard from './component/dashboards/sysadmindashboard';
import Userticket from './component/ticketmanagement/ticketcreation';
import { Getsession } from './component/methods/method';
import NoSession from './component/Nosession/Nosession';
function App() {
  const [sidemenuOpen , setSidemenuopen] = useState(false)
  const [RolId ,setRoleId] = useState(0)
  const [Issession,setIssession] = useState(0)
  const [UserName ,setUserName] = useState('')
  const [UserEmail ,setUserEmail] = useState('')

  useEffect(()=>{
    Getsession().then(res=>{
      setRoleId(res!=''?res[0].RoleId:0)
      setIssession(res!=''?res[0].Issession:0)
      setUserName(res!=''?res[0].UserName:'')
      setUserEmail(res!=''?res[0].UserEmail:'')
    })

  },[])
  const OpenSiemenu =()=>{
    setSidemenuopen(!sidemenuOpen)
  }

    return(
      <Router >
        {(window.location.pathname == '/' || window.location.pathname == Routing.Login) ?
          <div className="App">
            <Routes>
              <Route path={'/'} element={<Login />} />
              <Route path={Routing.Login} element={<Login />} />
            </Routes>
          </div>:
          <>
          {Issession == 1?
          <div className="App">
            <Header OpenSide={OpenSiemenu} UserName={UserName}/>
            <Sidemenu UserRoleId={RolId} Menuopen={sidemenuOpen}/>
              <Routes>
                <Route path={Routing.SuperDashboard} element={<SuperDashboard  />} />
                <Route path={Routing.UserManagement} element={<UserManagmnt  />} />
                <Route path={Routing.TicketMananagment} element={<TicketManagment  />} />
                <Route path={Routing.Settings} element={<Settings  UserEmailId={UserEmail}/>} />
                <Route path={Routing.Dashboard} element={<UserDashboard  />} />
                <Route path={Routing.SysticketManagment} element={<SysticketManagment  />} />
                <Route path={Routing.SystemEngineerDashboard} element={<SysAdminDashboard  />} />
                <Route path={Routing.UserTicket} element={<Userticket  />} />
              </Routes>
          </div>:
          <>
          <Routes>
                <Route path={Routing.NoSession} element={<NoSession  />} />
          </Routes>
          </>}</>
        }
      
    </Router>
    )
    
  
  }
export default App;
