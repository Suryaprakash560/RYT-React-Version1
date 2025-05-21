import React, { useState } from "react";
import InputField from "../reuseablecomponent/inputfield";

export default function Settings () {

    const [SettingsInfo, setSettingsInfo] = useState({
        Email : '',
        OldPassword : '',
        NewPassword : '',
        error : {}
    })
    const Handlechange = (name,e) =>{
        setSettingsInfo({
            ...SettingsInfo,
            [name] : e.target.value
        })
    }

    const OnBlurvalidation=(name)=>{
        let Error = SettingsInfo.error;
        let flage = true
        if(SettingsInfo[name] == ''){
            Error[name] = "* Please Enter " + name
            flage = false
        }
        else{
            Error[name] = ''
            flage = true
        }
        setSettingsInfo({
            ...SettingsInfo,
            error : Error
        })
        return flage
    }
    const Cancelsettings = () =>{
        setSettingsInfo({
            ...SettingsInfo,
                mail : '',
                OldPassword : '',
                NewPassword : '',
                error : {}
        })
    }
    return(
        <div className="Inner_Contaner width-settings mx-auto">
            <div className="Inner-pages-container">
            <h2 className="Heading-h2">Settings</h2>
                <div className="Input-patent">
                     <InputField
                        inputchange={(e)=>{Handlechange("Email",e)}}
                        Blur = {()=>{OnBlurvalidation("Email")}}
                        value = {SettingsInfo.Email}
                        placeholder = "* Email"
                        classname = "styled-input mb-1 w-100"
                        errors= {SettingsInfo.error}
                        InputName = "Email"
                        />
                        <InputField
                        inputchange={(e)=>{Handlechange("OldPassword",e)}}
                        Blur = {()=>{OnBlurvalidation("OldPassword")}}
                        value = {SettingsInfo.OldPassword}
                        placeholder = "* Password"
                        classname = "styled-input mb-1 w-100"
                        errors= {SettingsInfo.error}
                        InputName = "OldPassword"
                        />
                        <InputField
                        inputchange={(e)=>{Handlechange("NewPassword",e)}}
                        Blur = {()=>{OnBlurvalidation("NewPassword")}}
                        value = {SettingsInfo.NewPassword}
                        placeholder = "* New Password"
                        classname = "styled-input mb-1 w-100"
                        errors= {SettingsInfo.error}
                        InputName = "NewPassword"
                        />
                    {/* <input type="text" placeholder="*Email"  className="styled-input mb-1 w-100" value={SettingsInfo.Email} onChange={(e)=>{Handlechange("Email",e)}} onBlur={()=>{OnBlurvalidation("Email")}}/>
                    <div className="error-class mb-1 text-start">{SettingsInfo.error.Email}</div> */}
                    {/* <input type="password" placeholder="*Password"  className="styled-input mb-1 w-100" value={SettingsInfo.OldPassword} onChange={(e)=>{Handlechange("OldPassword",e)}} onBlur={()=>{OnBlurvalidation("OldPassword")}}/>
                    <div className="error-class mb-1 text-start">{SettingsInfo.error.OldPassword}</div> */}
                    {/* <input type="password" placeholder="*New Password"  className="styled-input mb-1 w-100" value={SettingsInfo.NewPassword} onChange={(e)=>{Handlechange("NewPassword",e)}} onBlur={()=>{OnBlurvalidation("NewPassword")}}/>
                    <div className="error-class mb-1 text-start">{SettingsInfo.error.NewPassword}</div> */}
                </div>
                <div className="d-flex justify-content-between">
                    <div className="Login-btn mt-3 ">
                        <button onClick={Cancelsettings}>Cancel</button>
                    </div>
                    <div className="Login-btn mt-3 ">
                        <button >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}