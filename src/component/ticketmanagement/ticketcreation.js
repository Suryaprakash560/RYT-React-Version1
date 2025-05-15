import React, { useState } from "react";
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';
// import InputField from "../reuseablecomponent/inputfield";
export default function Userticket (){
    const [UserTicket , setUserTicket] = useState({
        Issue:'',
        error:{}
    })
    const Discard =()=>{

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
    return(
         <div className="Inner_Contaner">
            <h2 className="Heading-h2">Ticket Management</h2>
            <div className="Inner-pages-container">
                <div className="row w-100 mx-auto">
                    <div className="col-12 col-sm-12 col-lg-8 col-md-8 col-lg-8 px-0 ">
                        <h4 className="Heading-h4 text-center">View</h4>
                        <div id="Setnew-height">
                            <div className="row w-100">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                                    <div className="content-div h-100 position-relative">
                                        <div className="menuIcon d-flex" >
                                            <div className="Edit-dlt me-2">
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                            </div>
                                            <div className="Edit-dlt">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        
                                        <div className="row w-100 mx-auto">
                                            <div className="col-5 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Descrption</p>
                                            </div>
                                            <div className="col-7 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-5 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Ticket Status</p>
                                            </div>
                                            <div className="col-7 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: Closed</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-5 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Assigned By</p>
                                            </div>
                                            <div className="col-7 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: Name</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-5 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Worked's Done</p>
                                            </div>
                                            <div className="col-7 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 pe-0 " id="Hole-height">
                    <h4 className="Heading-h4 text-center">Edit</h4>
                    <div className="content-div mt-3">
                        <textarea type="text" rows={5} placeholder="* Ticket Description"  className="styled-input mb-1 w-100" value={UserTicket.Issue} onChange={(e)=>{Handlechange("Issue",e)}} onBlur={()=>{OnBlurvalidation("Issue")}}/>
                        {/* <input type="text" placeholder="Raised By"  disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.UserName} />
                        <input type="text" placeholder="Desigination" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.Desigination} />
                        <textarea rows={5} type="number" placeholder="Description" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.Description} />
                        <input type="text" placeholder="AssignedBy" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.AssignedBy} />
                        <textarea type="text" rows={5} placeholder="* Works done"  className="styled-input mb-1 w-100" value={SysTicketDetsils.Worksdone} onChange={(e)=>{Handlechange("Worksdone",e)}} onBlur={()=>{OnBlurvalidation("Worksdone")}}/>
                        <div className="error-class mb-1 text-start">{SysTicketDetsils.error.Worksdone}</div> */}
                        <Select
                            placeholder = "* Select Admin"
                            // options={SysTicketDetsils.StatusArray}
                            styles={CustomStyle.CustomSelectStyle}
                            isSearchable={false}
                            isDisabled={false}
                            isLoading={false}
                            // onChange={SelectRole}
                            // value={SysTicketDetsils.TicketStatus.label!==undefined ? SysTicketDetsils.TicketStatus : "*Select Status"}
                            className="mb-2"
                        />
                        
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <button className="Btn-class" onClick={Discard}>Discard</button>
                            <button className="Btn-class" >Save</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}