import React, { useEffect, useState } from "react";
import Userimg from '../../assests/images/Userimg.png'
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';
import InputField from "../reuseablecomponent/inputfield";
import {GetAllRole,Saveuser,Getalluser,Edituser,Deleteuser} from '../methods/method'
import { type } from "@testing-library/user-event/dist/type";
export default function UserManagmnt (){

    const [Settingopen, setsettingsopen] = useState(false)
    const [UserInfo, setUserInfo] = useState({
        UserId : '',
        Name : '',
        Email : '',
        MobileNuber : '',
        Desigination : '',
        Password : '',
        UserType : {},
        RoleOptions : [],
        ProfileImage : '',
        AlluserArray : [],
        error:{}
    })
    useEffect(()=>{
        Onload()
    },[])

    const Onload =async()=>{
        let Roles=[],UserArray=[]
        await GetAllRole().then(res=>{
            Roles = res.length>0?res:[]
        })
        await Getalluser().then(res=>{
            UserArray = res.length>0?res:[]
        })
        if (window.location.search !== '') {
            let resp = window.location.search.substring(1, window.location.search.length);
            resp = atob(resp)
            let UserIdobj = JSON.parse(resp)
            if(UserIdobj.UserId !=undefined || UserIdobj.UserId !=''){
               let editeduser = UserArray.filter(x=>x._id ==UserIdobj.UserId)[0]
               let UserRole = Roles.filter(y=>y.RoleId == editeduser.RoleId.RoleId)[0]
               setUserInfo({
                    ...UserInfo,
                    UserId : UserIdobj.UserId,
                    Name : editeduser.UserName,
                    Email : atob(editeduser.Email),
                    MobileNuber : editeduser.MobileNumber,
                    Desigination : editeduser.Desigination,
                    Password : atob(editeduser.Password), 
                    UserType : UserRole,
                    ProfileImage : editeduser.ProfileImage,
                    RoleOptions : Roles,
                    AlluserArray : UserArray 
                })
            }
            else{
            setUserInfo({
                ...UserInfo,
                RoleOptions : Roles,
                AlluserArray : UserArray 
            })
            }
            
        }
        else{
            setUserInfo({
                ...UserInfo,
                RoleOptions : Roles,
                AlluserArray : UserArray 
            })
            }
        
    }
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
            flage = true;
            
            if(name=="Email"){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let validemail = emailRegex.test(UserInfo[name])
                if(validemail){
                    Error[name] = ''
                    flage = true
                }
                else{
                    Error[name] = '* Please Enter Valid Email'
                    flage = false  
                }
            }
            if(name = 'MobileNuber'){
                const indianMobileRegex = /^[6-9]\d{9}$/;
                let validmobile = indianMobileRegex.test(UserInfo[name])
                if(validmobile){
                    Error[name] = ''
                    flage = true
                }
                else{
                    Error[name] = '* Please Enter Valid Mobilenumber'
                    flage = false  
                }
            }
        }
        setUserInfo({
            ...UserInfo,
            error : Error
        })
        return flage
    }

    const SelectRole = (Selectedoption) =>{
        setUserInfo({
            ...UserInfo,
            UserType:Selectedoption
        })
    }
    const SelectProfile = (e) =>{
        const url = URL.createObjectURL(e.target.files[0]);
       
    }
    const Discard = () =>{
        setUserInfo({
            ...UserInfo,
            UserId : '',
            Name : '',
            Email : '',
            MobileNuber : '',
            Desigination : '',
            Password : '',
            UserType : {},
            ProfileImage : '',
            error:{},
        })
    }
    const EditUser =(data)=>{
        let Userrole = UserInfo.RoleOptions.filter(x=>x.value == data.RoleId._id)[0]
            setUserInfo({
                ...UserInfo,
                UserId : data._id,
                Name : data.UserName,
                Email : atob(data.Email),
                MobileNuber : data.MobileNumber,
                Desigination : data.Desigination,
                Password : atob(data.Password),
                UserType : Userrole,
                ProfileImage : data.ProfileImage,
            })
    }
    const GetallUser = async() =>{
        let UserArray=[]
        await Getalluser().then(res=>{
            UserArray = res.length>0?res:[]
        })
        setUserInfo({
            ...UserInfo,
            AlluserArray : UserArray,
            UserId : '',
            Name : '',
            Email : '',
            MobileNuber : '',
            Desigination : '',
            Password : '',
            UserType : {},
            ProfileImage : '',
            error:{},
        })
    }
    const SaveUser = async() =>{
        let Error = UserInfo.error;
        
        let UserName = OnBlurvalidation("Name");
        let Email = OnBlurvalidation("Email");
        let MblNo = OnBlurvalidation("MobileNuber");
        let Password = OnBlurvalidation("Password");
        let Desigination = OnBlurvalidation("Desigination");
        let RoleId = UserInfo.UserType.label !=undefined ? true : false;
        if(!RoleId){
            Error['Role'] = '* please select Role'
            setUserInfo({
                ...UserInfo,
                error : Error
            })
        }
        else{
            Error['Role'] = ''
            setUserInfo({
                ...UserInfo,
                error : Error
            })
        }
        if(UserName && Email && MblNo && Password && Desigination && RoleId){
            if(UserInfo.UserId ==''){
                await Saveuser(UserInfo.Name,btoa(UserInfo.Email),btoa(UserInfo.Password),UserInfo.MobileNuber,UserInfo.Desigination,UserInfo.ProfileImage,UserInfo.UserType.value).then(res=>{
                })
            }
            else{
                await Edituser(UserInfo.UserId,UserInfo.Name,btoa(UserInfo.Email),btoa(UserInfo.Password),UserInfo.MobileNuber,UserInfo.Desigination,UserInfo.ProfileImage,UserInfo.UserType.value).then(res=>{
                    
                })
            }
            GetallUser()
            
        }
        
    }
    const DeleteUsers =(UserId)=>{
        Deleteuser(UserId).then(res=>{
            GetallUser()
        })
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
                                {UserInfo.AlluserArray.length>0?
                                UserInfo.AlluserArray.map((x,i)=>
                                     <div className="col-6 col-sm-6 col-lg-4 col-md-4 col-xl-4 mb-4 " key={i}>
                                    <div className={x._id == UserInfo.UserId?"UserCard text-center h-100 tansform" : "UserCard text-center h-100"}>
                                        <div className="menuIcon d-flex" >
                                            <div className="Edit-dlt me-2" onClick={()=>{EditUser(x)}}>
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                            </div>
                                            <div className="Edit-dlt" onClick={()=>{DeleteUsers(x._id)}}>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="User-img-width mx-auto mb-1">
                                            <img src={x.ProfileImage==''?Userimg:''} className="w-100"/>
                                        </div>
                                        <p className="normal-p-tag  m-0 font-weight-700">{x.UserName}</p>
                                        <p className="normal-p-tag  m-0 font-weight-700">{x.Desigination}</p>
                                        <p className="normal-p-tag  m-0 font-weight-700">{atob(x.Email)}</p>
                                        <p className="normal-p-tag  m-0 font-weight-700">{x.MobileNumber}</p>
                                        <p className="normal-p-tag  m-0 font-weight-700">{x.RoleId.RoleName}</p>
                                    </div>
                                </div>
                                )
                               :
                                <div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 pe-0">
                    <h4 className="Heading-h4 text-center">Add</h4>
                    <div className="content-div">
                         <InputField
                            inputchange={(e)=>{Handlechange("Name",e)}}
                            Blur = {()=>{OnBlurvalidation("Name")}}
                            inputvaluevalue = {UserInfo.Name}
                            placeholder = "* Name"
                            classname = "styled-input mb-1 w-100"
                            errors= {UserInfo.error}
                            InputName = "Name"
                            Inputtype = 'text'
                            />
                            <InputField
                            inputchange={(e)=>{Handlechange("Email",e)}}
                            Blur = {()=>{OnBlurvalidation("Email")}}
                            inputvaluevalue = {UserInfo.Email}
                            placeholder = "* Email"
                            classname = "styled-input mb-1 w-100"
                            errors= {UserInfo.error}
                            InputName = "Email"
                            Inputtype = 'text'
                            />
                            <InputField
                            inputchange={(e)=>{Handlechange("MobileNuber",e)}}
                            Blur = {()=>{OnBlurvalidation("MobileNuber")}}
                            inputvaluevalue = {UserInfo.MobileNuber}
                            placeholder = "* MobileNuber"
                            classname = "styled-input mb-1 w-100"
                            errors= {UserInfo.error}
                            InputName = "MobileNuber"
                            Inputtype = 'text'
                            />
                            <InputField
                            inputchange={(e)=>{Handlechange("Password",e)}}
                            Blur = {()=>{OnBlurvalidation("Password")}}
                            inputvaluevalue = {UserInfo.Password}
                            placeholder = "* Password"
                            classname = "styled-input mb-1 w-100"
                            errors= {UserInfo.error}
                            InputName = "Password"
                            Inputtype = 'text'
                            />
                             <InputField
                            inputchange={(e)=>{Handlechange("Desigination",e)}}
                            Blur = {()=>{OnBlurvalidation("Desigination")}}
                            inputvaluevalue = {UserInfo.Desigination}
                            placeholder = "* Desigination"
                            classname = "styled-input mb-1 w-100"
                            errors= {UserInfo.error}
                            InputName = "Desigination"
                            Inputtype = 'text'
                            />
                        {/* <input type="text" placeholder="*Name"  className="styled-input mb-1 w-100" value={UserInfo.Name} onChange={(e)=>{Handlechange("Name",e)}} onBlur={()=>{OnBlurvalidation("Name")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Name}</div> */}
                        {/* <input type="text" placeholder="*Email"  className="styled-input mb-1 w-100" value={UserInfo.Email} onChange={(e)=>{Handlechange("Email",e)}} onBlur={()=>{OnBlurvalidation("Email")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Email}</div> */}
                        {/* <input type="number" placeholder="*MobileNuber"  className="styled-input mb-1 w-100" value={UserInfo.MobileNuber} onChange={(e)=>{Handlechange("MobileNuber",e)}} onBlur={()=>{OnBlurvalidation("MobileNuber")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.MobileNuber}</div> */}
                        {/* <input type="text" placeholder="*Password"  className="styled-input mb-1 w-100" value={UserInfo.Password} onChange={(e)=>{Handlechange("Password",e)}} onBlur={()=>{OnBlurvalidation("Password")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Password}</div> */}
                        {/* <input type="text" placeholder="*Desigination"  className="styled-input mb-1 w-100" value={UserInfo.Desigination} onChange={(e)=>{Handlechange("Desigination",e)}} onBlur={()=>{OnBlurvalidation("Desigination")}}/>
                        <div className="error-class mb-1 text-start">{UserInfo.error.Desigination}</div> */}
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
                        <div className="error-class mb-1 text-start">{UserInfo.error.Role}</div>
                        
                        <div className="Profile-img-div " onChange={(e)=>{SelectProfile(e)}}>
                            <i class="fa fa-picture-o" aria-hidden="true"></i>   Choose profile<input type="file" accept=".png,.jpg,.jpeg"/>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <button className="Btn-class" onClick={Discard}>Discard</button>
                            <button className="Btn-class" onClick={SaveUser}>{UserInfo.UserId ==''?'Save' : "Update"}</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}