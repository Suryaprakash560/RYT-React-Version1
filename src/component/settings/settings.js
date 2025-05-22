import React, { useEffect, useState } from "react";
import InputField from "../reuseablecomponent/inputfield";
import {checkemailpassword,updateuserpassword} from '../methods/method'
export default function Settings ({UserEmailId}) {

    const [SettingsInfo, setSettingsInfo] = useState({
        Email : atob(UserEmailId),
        OldPassword : '',
        NewPassword : '',
        error : {}
    })
    
    useEffect(()=>{
        // onload()
        
    },[])


    // const onload = async() =>{
    //     await setSettingsInfo({
    //         ...SettingsInfo,
    //         Email : atob(UserEmailId)
    //     })
    // }
    const Handlechange = (name,e) =>{
        setSettingsInfo({
            ...SettingsInfo,
            [name] : e.target.value
        })
    }

    const OnBlurvalidation=async(name)=>{
        let Error = SettingsInfo.error;
        let flage = true
        if(SettingsInfo[name] == ''){
            Error[name] = "* Please Enter " + name
            flage = false
        }
        else{
            Error[name] = ''
            if(name == 'OldPassword'){
                await checkemailpassword(btoa(SettingsInfo.Email),btoa(SettingsInfo[name])).then(res=>{
                    if(res[0].Status == 1){
                        Error[name] = ""
                        flage = true
                    }
                    else{
                        Error[name] = "* Invalid Username Password"
                        flage = false
                    }
                })
            }
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

    const Changesnewpassword =async() =>{
        let Email = await OnBlurvalidation("Email")
        let oldpass = await OnBlurvalidation("OldPassword")
        let Newpass = await OnBlurvalidation("NewPassword")
        if(Email && oldpass && Newpass){
            updateuserpassword(btoa(SettingsInfo.Email),btoa(SettingsInfo.OldPassword),btoa(SettingsInfo.NewPassword)).then(res=>{
                Cancelsettings()
            })
        }
    }
    return(
        <div className="Inner_Contaner width-settings mx-auto">
            <div className="Inner-pages-container">
            <h2 className="Heading-h2">Settings</h2>
                <div className="Input-patent">
                     <InputField
                        inputchange={(e)=>{Handlechange("Email",e)}}
                        Blur = {()=>{OnBlurvalidation("Email")}}
                        inputvaluevalue = {SettingsInfo.Email}
                        placeholder = "* Email"
                        classname = "styled-input mb-1 w-100"
                        errors= {SettingsInfo.error}
                        InputName = "Email"
                        Inputtype = 'text'
                        />
                        <InputField
                        inputchange={(e)=>{Handlechange("OldPassword",e)}}
                        Blur = {()=>{OnBlurvalidation("OldPassword")}}
                        inputvaluevalue = {SettingsInfo.OldPassword}
                        placeholder = "* Password"
                        classname = "styled-input mb-1 w-100"
                        errors= {SettingsInfo.error}
                        InputName = "OldPassword"
                        Inputtype = 'password'
                        />
                        <InputField
                        inputchange={(e)=>{Handlechange("NewPassword",e)}}
                        Blur = {()=>{OnBlurvalidation("NewPassword")}}
                        inputvaluevalue = {SettingsInfo.NewPassword}
                        placeholder = "* New Password"
                        classname = "styled-input mb-1 w-100"
                        errors= {SettingsInfo.error}
                        InputName = "NewPassword"
                        Inputtype = 'password'
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
                        <button onClick={Changesnewpassword}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}