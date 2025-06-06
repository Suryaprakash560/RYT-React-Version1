import React, { useEffect, useState } from "react";
import RYTLogo from '../../assests/images/RYT-logo.png';
import {Logout} from '../methods/method';
import { Routing } from "../../assests/js/routing";
const NOOP = {}
export default function Header ({OpenSide=NOOP,UserName}) {
    const [UserINfo, setUserInfo] = useState({
        UserName:''
    })

    const LogoutUser = () =>{
        Logout().then(res=>{
            if(res[0].Status==1){
                window.location.href = Routing.Login
            }
        })
    }
    useEffect(()=>{
        // Getsession().then(res=>{
        //     setUserInfo({
        //         ...UserINfo,
        //         UserName : res!=''?res[0].UserName:''
        //     })
        // })
    },[])
    return(
        <div className="Header-container row w-100 mx-auto align-items-center">
            <div className="col-4 col-sm-4 col-md-1 col-xl-1 col-lg-1"><img src={RYTLogo} className="w-100"/></div>
            <div className="col-8 col-8 col-sm-11 col-md-11 col-xl-11 col-lg-11">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-9 col-xl-9 col-lg-9 text-start UserInfo-div" >{window.matchMedia("(max-width: 991px)").matches && <div onClick={OpenSide}><i class="fa fa-bars" aria-hidden="true"></i></div>}</div>  {/*   */}
                    <div className="col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3">
                        <div className="d-flex align-items-center UserInfo-div justify-content-end">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                            <div className="UserName">Hii {UserName}</div>
                            <i class="fa fa-power-off" aria-hidden="true" onClick={LogoutUser}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}