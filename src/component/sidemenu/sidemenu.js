import React from "react";
import { Routing } from "../../assests/js/routing";
import { useNavigate } from 'react-router-dom';
export default function Sidemenu ({Menuopen,UserRoleId}){
    const navigate = useNavigate();
    const Redirectpage =(Url)=>{
        window.location.href = Url
    }
    return(
        <div className="Sidemenu-conrainer">
            {window.matchMedia("(min-width: 991px)").matches &&
            <nav>
                {UserRoleId == 1?
                <ul>
                    <li onClick={()=>{Redirectpage(Routing.SuperDashboard)}}>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.UserManagement)}}>
                        <i class="fa fa-users" aria-hidden="true"></i> User Creation
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.TicketMananagment)}}>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.Settings)}}>
                        <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>:
                UserRoleId == 2?
                <ul>
                    <li onClick={()=>{Redirectpage(Routing.SystemEngineerDashboard)}}>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.SysticketManagment)}}>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li >
                    <li onClick={()=>{Redirectpage(Routing.Settings)}}>
                    <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>:
                <ul>
                    <li onClick={()=>{Redirectpage(Routing.Dashboard)}}>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.UserTicket)}}>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.Settings)}}>
                    <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>
                }
            </nav>}
            {Menuopen == true &&
                <nav>
                {UserRoleId == 1?
                <ul>
                    <li onClick={()=>{Redirectpage(Routing.SuperDashboard)}}>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.UserManagement)}}>
                        <i class="fa fa-users" aria-hidden="true"></i> User Creation
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.TicketMananagment)}}>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.Settings)}}>
                        <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>:
                UserRoleId == 2?
                <ul>
                    <li onClick={()=>{Redirectpage(Routing.SystemEngineerDashboard)}}>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.SysticketManagment)}}>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li >
                    <li onClick={()=>{Redirectpage(Routing.Settings)}}>
                    <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>:
                <ul>
                    <li onClick={()=>{Redirectpage(Routing.Dashboard)}}>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.UserTicket)}}>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li>
                    <li onClick={()=>{Redirectpage(Routing.Settings)}}>
                    <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>
                }
            </nav>
            }
        </div>
    )
}