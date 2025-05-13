import React, { useState } from "react";
import Ticket from '../../assests/images/Ticket.png'
import InputField from "../reuseablecomponent/inputfield";
export default function Login(){
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
            console.log(LoginInformation)
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
                        <div className="">
                            <h4>USER LOGIN</h4>
                            <div className="Input-patent">
                                <InputField
                                inputchange={(e)=>{Handlechange("UserName",e)}}
                                Blur = {()=>{OnBlurvalidation("UserName")}}
                                value = {LoginInformation.UserName}
                                placeholder = "User mail"
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