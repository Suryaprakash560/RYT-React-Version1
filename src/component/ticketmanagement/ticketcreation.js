import React, { useState,useEffect } from "react";
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';
import {Getalluser,Saveticket,Getallusertickets,UpdateTicket} from '../methods/method'
// import InputField from "../reuseablecomponent/inputfield";
export default function Userticket (){
    const [UserTicket , setUserTicket] = useState({
        Issue:'',
        error:{},
        SysAdminArray : [],
        SelectedAdmin : {},
        TicketArray : [],
        WorksDone : '',
        TicketId : '',
        TicketStatus:0
    })

    useEffect(()=>{
        Onload()
    },[])

    const Onload = async() =>{
        let UserArray = [],TicketArray=[]
        await Getalluser().then(res=>{
            UserArray = res.length>0?res.filter(x=>x.RoleId.RoleId == 2):[]
        })
        let valuelable=UserArray.map((x,i)=>{
            return({
                value : x._id,
                label  : x.UserName
            })
        })
        await Getallusertickets().then(res=>{
            TicketArray = res.length>0?res:[]
        })
        setUserTicket({
            ...UserTicket,
            SysAdminArray : valuelable,
            TicketArray:TicketArray
        })
    }
    const Discard =()=>{
        setUserTicket({
            ...UserTicket,
            SelectedAdmin : {},
            error : {},
            Issue :'',
            TicketId : '',
            WorksDone : '',
            TicketStatus:0
        })
    }
    const Handlechange = (name,e) =>{
        setUserTicket({
            ...UserTicket,
            [name] : e.target.value
        })
    }

    const OnBlurvalidation=(name)=>{
        let Error = UserTicket.error;
        let flage = true
        if(UserTicket[name] == ''){
            Error[name] = "* Please Enter " + name
            flage = false
        }
        else{
            Error[name] = ''
            flage = true
        }
        setUserTicket({
            ...UserTicket,
            error : Error
        })
        return flage
    }

    const SelectSysadmin = (Seletedoption) =>{
        setUserTicket({
            ...UserTicket,
            SelectedAdmin:Seletedoption
        })
    }
    const Getalltickets = async() =>{
        let TicketArray =[]
        await Getallusertickets().then(res=>{
            TicketArray = res.length>0?res:[]
        })
        setUserTicket({
            ...UserTicket,
            SysAdminArray : {},
            TicketArray:TicketArray,
            Issue:'',
            error:{},
            WorksDone : '',
            TicketId : '',
            TicketStatus:0
        })
    }
    const TicketSave = () =>{
        let Error = UserTicket.error
        let TicketIssue = OnBlurvalidation("Issue")
        let SysAdm = UserTicket.SelectedAdmin.label !=undefined? true: false
        if(SysAdm ==false){
            Error["SysAdm"] = '* Please select Admin'
            setUserTicket({
                ...UserTicket,
                error:Error
            })
        }
        if(TicketIssue && TicketIssue){
            if(UserTicket.TicketId==''){
                Saveticket(UserTicket.Issue,UserTicket.TicketStatus,UserTicket.SelectedAdmin.value,UserTicket.WorksDone).then(res=>{
                    Getalltickets()
                })
            }
            else{
                UpdateTicket(UserTicket.Issue,UserTicket.TicketStatus,UserTicket.SelectedAdmin.value,UserTicket.WorksDone,UserTicket.TicketId).then(res=>{
                    Getalltickets()
                })
            }
            
        }

    }

    const EditTicket =(data)=>{
        let admobj = {value:data.SysAdminId._id,label:data.SysAdminId.UserName}
        setUserTicket({
            ...UserTicket,
            Issue : data.TicketDescription,
            WorksDone : data.WorksDone,
            TicketId : data._id,
            SelectedAdmin : admobj,
            TicketStatus :data.TicketStatus
        })
    }
    return(
         <div className="Inner_Contaner">
            <h2 className="Heading-h2">Ticket Management</h2>
            <div className="Inner-pages-container">
                <div className="row w-100 mx-auto">
                    <div className="col-12 col-sm-12 col-lg-8 col-md-8 col-lg-8 px-0 ">
                        <h4 className="Heading-h4 text-center">View</h4>
                        <div id="Setnew-height">
                            <div className="row w-100">
                                {UserTicket.TicketArray.length>0?
                                    UserTicket.TicketArray.map((ele,i)=>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2" key={i}>
                                            <div className="content-div h-100 position-relative">
                                                <div className="menuIcon d-flex" >
                                                    <div className="Edit-dlt me-2" onClick={()=>{EditTicket(ele)}}>
                                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="Edit-dlt" >
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                
                                                <div className="row w-100 mx-auto">
                                                    <div className="col-5 p-0">
                                                        <p className="normal-p-tag font-bold m-0 text-start">Descrption</p>
                                                    </div>
                                                    <div className="col-7 p-0">
                                                        <p className="normal-p-tag  m-0 text-start">: {ele.TicketDescription}</p>
                                                    </div>
                                                </div>
                                                <div className="row w-100 mx-auto">
                                                    <div className="col-5 p-0">
                                                        <p className="normal-p-tag font-bold m-0 text-start">Ticket Status</p>
                                                    </div>
                                                    <div className="col-7 p-0">
                                                        <p className="normal-p-tag  m-0 text-start">: {ele.TicketStatus == 0?'Pending':ele.TicketStatus == 1?"InProcess":"Resolved"}</p>
                                                    </div>
                                                </div>
                                                <div className="row w-100 mx-auto">
                                                    <div className="col-5 p-0">
                                                        <p className="normal-p-tag font-bold m-0 text-start">Assigned To</p>
                                                    </div>
                                                    <div className="col-7 p-0">
                                                        <p className="normal-p-tag  m-0 text-start">: {ele.SysAdminId.UserName}</p>
                                                    </div>
                                                </div>
                                                <div className="row w-100 mx-auto">
                                                    <div className="col-5 p-0">
                                                        <p className="normal-p-tag font-bold m-0 text-start">Worked's Done</p>
                                                    </div>
                                                    <div className="col-7 p-0">
                                                        <p className="normal-p-tag  m-0 text-start">: {ele.WorksDone==''?"NA":ele.WorksDone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>}
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 pe-0 " id="Hole-height">
                    <h4 className="Heading-h4 text-center">Edit</h4>
                    <div className="content-div mt-3">
                        <textarea type="text" rows={5} placeholder="* Ticket Description"  className="styled-input mb-1 w-100" value={UserTicket.Issue} onChange={(e)=>{Handlechange("Issue",e)}} onBlur={()=>{OnBlurvalidation("Issue")}}/>
                            <div className="error-class mb-1 text-start">{UserTicket.error.Issue}</div>
                        {/* <input type="text" placeholder="Raised By"  disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.UserName} />
                        <input type="text" placeholder="Desigination" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.Desigination} />
                        <textarea rows={5} type="number" placeholder="Description" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.Description} />
                        <input type="text" placeholder="AssignedBy" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.AssignedBy} />
                        <textarea type="text" rows={5} placeholder="* Works done"  className="styled-input mb-1 w-100" value={SysTicketDetsils.Worksdone} onChange={(e)=>{Handlechange("Worksdone",e)}} onBlur={()=>{OnBlurvalidation("Worksdone")}}/>
                        <div className="error-class mb-1 text-start">{SysTicketDetsils.error.Worksdone}</div> */}
                        <Select
                            placeholder = "* Select Admin"
                            options={UserTicket.SysAdminArray}
                            styles={CustomStyle.CustomSelectStyle}
                            isSearchable={false}
                            isDisabled={false}
                            isLoading={false}
                            onChange={SelectSysadmin}
                            value={UserTicket.SelectedAdmin.label!==undefined ? UserTicket.SelectedAdmin : "* Select Admin"}
                            className="mb-2"
                        />
                        <div className="error-class mb-1 text-start">{UserTicket.error.SysAdm}</div>
                        
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <button className="Btn-class" onClick={Discard}>Discard</button>
                            <button className="Btn-class" onClick={TicketSave}>Save</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}