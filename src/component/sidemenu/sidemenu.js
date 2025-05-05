import React from "react";

export default function Sidemenu ({Menuopen}){
    return(
        <div className="Sidemenu-conrainer">
            {window.matchMedia("(min-width: 991px)").matches &&
            <nav>
                <ul>
                    <li>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li>
                        <i class="fa fa-users" aria-hidden="true"></i> User Creation
                    </li>
                    <li>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li>
                    <li>
                    <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>
            </nav>}
            {Menuopen == true &&
                <nav>
                <ul>
                    <li>
                        <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                    </li>
                    <li>
                        <i class="fa fa-users" aria-hidden="true"></i> User Creation
                    </li>
                    <li>
                        <i class="fa fa-ticket" aria-hidden="true"></i> Tickets
                    </li>
                    <li>
                    <i class="fa fa-wrench" aria-hidden="true"></i> Settings
                    </li>
                </ul>
            </nav>
            }
        </div>
    )
}