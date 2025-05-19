import React, { useState } from "react";
import Ticket from '../../assests/images/Ticket.png'
import InputField from "../reuseablecomponent/inputfield";
import {UsersLogin,Getsession} from '../methods/method';
import { useNavigate } from 'react-router-dom';
import { Routing } from "../../assests/js/routing";
export default function Login(){
    const Navigate = useNavigate()

    const [LoginInformation, setLoginInformation] = useState({
        UserName : '',
        Password : '',
        error : {}
    })

    const Handlechange = (name,e) =>{
        setLoginInformation({
            ...LoginInformation,
            [name] : e.target.value
        })
    }

    const OnBlurvalidation=(name)=>{
        let Error = LoginInformation.error;
        let flage = true
        if(LoginInformation[name] == ''){
            Error[name] = "* Please Enter " + name
            flage = false
        }
        else{
            Error[name] = ''
            flage = true
            if(name=="UserName"){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let validemail = emailRegex.test(LoginInformation[name])
                if(validemail){
                    Error[name] = ''
                    flage = true
                }
                else{
                    Error[name] = '* Please Enter Valid Email'
                    flage = false  
                }
            }
        }
        
        
            
            setLoginInformation({
            ...LoginInformation,
            error : Error
        })
        return flage
    }

    const UserLogin =()=>{
        let Error = LoginInformation.error
        let Username = OnBlurvalidation("UserName")
        let Password = OnBlurvalidation("Password")
        if(Username && Password){
            UsersLogin(btoa(LoginInformation.UserName),btoa(LoginInformation.Password)).then(res=>{
                    if(res!=undefined){
                        if(res[0].Status !=undefined){
                            console.log(res[0].Status)
                            Error["LoginErr"] = res[0].MSG
                            setLoginInformation({
                                ...LoginInformation,
                                error : Error
                            })
                        }
                        else{
                            if(res[0].RoleId.RoleId == 1){
                                window.location.href = Routing.SuperDashboard
                            }
                            else if(res[0].RoleId.RoleId == 2){
                                window.location.href = Routing.SystemEngineerDashboard
                            }
                            else{
                                window.location.href = Routing.Dashboard
                            }
                        }
                    }
            })
        }
        
    }
    return(
        <div className="Login-container">
            <div className="Content-container row">
                <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
                    <div>
                    <div className="Welcomecontainer">
                        <h3>
                            Welcome To
                        </h3>
                        <h1>
                           RYT
                        </h1>
                    </div>
                    <img src={Ticket} className="ticket-image"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 px-0">
                    <div className="Login-Input-fields  d-flex justify-content-center align-items-center">
                        <div className="w-100">
                            <h4>USER LOGIN</h4>
                            <div className="Input-patent">
                                <InputField
                                inputchange={(e)=>{Handlechange("UserName",e)}}
                                Blur = {()=>{OnBlurvalidation("UserName")}}
                                value = {LoginInformation.UserName}
                                placeholder = "Email"
                                classname = "styled-input mb-1 w-100"
                                errors= {LoginInformation.error}
                                InputName = "UserName"
                                />
                                {/* <input type="text" placeholder="User mail "  className="styled-input mb-1" value={LoginInformation.UserName} onChange={(e)=>{Handlechange("UserName",e)}} onBlur={()=>{OnBlurvalidation("UserName")}}/> */}
                                {/* <div className="error-class mb-1 text-start">{LoginInformation.error.UserName}</div> */}
                                {/* <input type="password" placeholder="Password"  className="styled-input mb-1" value={LoginInformation.Password} onChange={(e)=>{Handlechange("Password",e)}} onBlur={()=>{OnBlurvalidation("Password")}}/> */}
                                <InputField
                                inputchange={(e)=>{Handlechange("Password",e)}}
                                Blur = {()=>{OnBlurvalidation("Password")}}
                                value = {LoginInformation.Password}
                                placeholder = "Password"
                                classname = "styled-input mb-1 w-100"
                                errors= {LoginInformation.error}
                                InputName = "Password"
                                />
                                {/* <div className="error-class mb-1 text-start">{LoginInformation.error.Password}</div> */}
                            </div>
                            <div className="error-class mb-1 text-start">{LoginInformation.error.LoginErr}</div>
                            <div className="Login-btn mt-3 ">
                                <button onClick={UserLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}