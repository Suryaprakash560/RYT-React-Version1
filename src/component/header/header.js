import React, { useState } from "react";
import RYTLogo from '../../assests/images/RYT-logo.png'
export default function Header () {
    const [UserINfo, setUserInfo] = useState({
        UserName:'Surya'
    })
    return(
        <div className="Header-container row w-100 mx-auto align-items-center">
            <div className="col-1"><img src={RYTLogo} className="w-100"/></div>
            <div className="col-11">
                <div className="row">
                    <div className="col-9 text-start UserInfo-div"><i class="fa fa-bars" aria-hidden="true"></i></div>
                    <div className="col-3">
                        <div className="d-flex align-items-center UserInfo-div justify-content-end">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                            <div className="UserName">Hii {UserINfo.UserName}</div>
                            <i class="fa fa-power-off" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}