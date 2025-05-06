import React, { useState } from "react";
import Userimg from '../../assests/images/Userimg.png'
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';
export default function UserManagmnt (){

    const [Settingopen, setsettingsopen] = useState(false)
    const [UserInfo, setUserInfo] = useState({
        UserId : 0,
        Name : '',
        Email : '',
        MobileNuber : '',
        Desigination : '',
        Password : '',
        UserType : {},
        RoleOptions : [],
        ProfileImage : '',
        error:{}
    })

    const Handlechange = (name,e) =>{
        setUserInfo({
            ...UserInfo,
            [name] : e.target.value
        })
    }

    const OnBlurvalidation=(name)=>{
        let Error = UserInfo.error;
        let flage = true
        if(UserInfo[name] == ''){
            Error[name] = "* Please Enter " + name
            flage = false
        }
        else{
            Error[name] = ''
            flage = true
        }
        setUserInfo({
            ...UserInfo,
            error : Error
        })
        return flage
    }

    const SelectRole = (Selectedoption) =>{
        console.log(Selectedoption)
        setUserInfo({
            ...UserInfo,
            UserType:Selectedoption
        })
    }
    const SelectProfile = (e) =>{
        
    }
    const Discard = () =>{
        setUserInfo({
            ...UserInfo,
            UserId : 0,
        Name : '',
        Email : '',
        MobileNuber : '',
        Desigination : '',
        Password : '',
        UserType : {},
        error : {}
        })
    }

    const SaveUser = () =>{
    }
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">User Management</h2>
            <div className="Inner-pages-container">
                <div className="row w-100 mx-auto">
                    <div className="col-12 col-sm-12 col-lg-8 col-md-8 col-lg-8 px-0">
                        <h4 className="Heading-h4 text-center">View</h4>
                        <div className="content-div height-contentdiv">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-lg-4 col-md-4 col-xl-4 mb-2">
                                    <div className="UserCard text-center">
                                        <div className="menuIcon d-flex" >
                                            <div className="Edit-dlt me-2">
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                            </div>
                                            <div className="Edit-dlt">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="User-img-width mx-auto mb-1">
                                            <img src={Userimg} className="w-100"/>
                                        </div>
                                        <p className="Dasboard-p  m-0 font-weight-700">Surya</p>
                                        <p className="Dasboard-p  m-0 font-weight-700">Technology Enabler</p>
                                        <p className="Dasboard-p  m-0 font-weight-700">Name@skillablers.com</p>
                                        <p className="Dasboard-p  m-0 font-weight-700">9876543210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 pe-0">
                    <h4 className="Heading-h4 text-center">Add</h4>
                    <div className="content-div">
                        <input type="text" placeholder="*Name"  className="styled-input mb-1 w-100" value={UserInfo.Name} onChange={(e)=>{Handlechange("Name",e)}} onBlur={()=>{OnBlurvalidation("Name")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Name}</div>
                        <input type="text" placeholder="*Email"  className="styled-input mb-1 w-100" value={UserInfo.Email} onChange={(e)=>{Handlechange("Email",e)}} onBlur={()=>{OnBlurvalidation("Email")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Email}</div>
                        <input type="number" placeholder="*MobileNuber"  className="styled-input mb-1 w-100" value={UserInfo.MobileNuber} onChange={(e)=>{Handlechange("MobileNuber",e)}} onBlur={()=>{OnBlurvalidation("MobileNuber")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.MobileNuber}</div>
                        <input type="text" placeholder="*Password"  className="styled-input mb-1 w-100" value={UserInfo.Password} onChange={(e)=>{Handlechange("Password",e)}} onBlur={()=>{OnBlurvalidation("Password")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Password}</div>
                        <input type="text" placeholder="*Desigination"  className="styled-input mb-1 w-100" value={UserInfo.Desigination} onChange={(e)=>{Handlechange("Desigination",e)}} onBlur={()=>{OnBlurvalidation("Desigination")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Desigination}</div>
                        <Select
                            placeholder = "*Select Role"
                            options={UserInfo.RoleOptions}
                            styles={CustomStyle.CustomSelectStyle}
                            isSearchable={false}
                            isDisabled={false}
                            isLoading={false}
                            onChange={SelectRole}
                            value={UserInfo.UserType.label!==undefined ? UserInfo.UserType : "*Select Role"}
                            className="mb-2"
                        />
                        <div className="Profile-img-div " onChange={(e)=>{SelectProfile(e)}}>
                            <i class="fa fa-picture-o" aria-hidden="true"></i>   Choose profile<input type="file" accept=".png,.jpg,.jpeg"/>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <button className="Btn-class" onClick={Discard}>Discard</button>
                            <button className="Btn-class" onClick={SaveUser}>Save</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}