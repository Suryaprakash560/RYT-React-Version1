import React, { useEffect, useState } from "react";
import Userimg from '../../assests/images/Userimg.png';
import {Getalluser,GetallTickets} from '../methods/method';
import TicketManagment from "../ticketmanagement/ticketmanagment";
export default function SuperAdminDashboard () {

    const [DashboardDetails, setDashboardDetails] = useState({
        UsersArray : [],
        TicketsArray:[]
    })

    useEffect(()=>{
       Onload()
    },[])

    const Onload = async() =>{
        let UserArray = [],TicketArray=[]
        await Getalluser().then(res=>{
                UserArray = res.length>0?res:[]
            })
        await GetallTickets().then(res=>{
                TicketArray = res.length>0?res:[]
            })
        setDashboardDetails({
            ...DashboardDetails,
            UsersArray : UserArray,
            TicketsArray : TicketArray
        })
    }
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">DashBoard</h2>
            <div className="d-flex justify-content-between mb-2 align-items-end">
                <h4 className="Heading-h4">User Details</h4>
                <button className="Btn-class">Create User</button>
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                {DashboardDetails.UsersArray.length>0?
                    DashboardDetails.UsersArray.map((ele,ind)=>
                        <div className="col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                            <div className="content-div h-100">
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <div className="User-img-width">
                                            <img src={ele.ProfileImage==''?Userimg:ele.ProfileImage} className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="col-9 d-flex align-items-center justify-content-end">
                                        <div className="Edit-dlt me-3" >
                                            {/* {ele._id} */}
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </div>
                                        <div className="Edit-dlt">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mx-auto">
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p font-bold m-0 text-start">Name</p>
                                    </div>
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p word-break-dash  m-0 text-start">: {ele.UserName}</p>
                                    </div>
                                </div>
                                <div className="row w-100 mx-auto">
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p font-bold m-0 text-start">Email</p>
                                    </div>
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p word-break-dash word-break-dash  m-0 text-start">: {atob(ele.Email)}</p>
                                    </div>
                                </div>
                                <div className="row w-100 mx-auto">
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p  font-bold m-0 text-start">Mobile.No</p>
                                    </div>
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p  word-break-dash m-0 text-start">: {ele.MobileNumber}</p>
                                    </div>
                                </div>
                                <div className="row w-100 mx-auto">
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p font-bold m-0 text-start">Desigination</p>
                                    </div>
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p  m-0 text-start">: {ele.Desigination}</p>
                                    </div>
                                </div>
                                 <div className="row w-100 mx-auto">
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p font-bold m-0 text-start">User Role</p>
                                    </div>
                                    <div className="col-6 p-0">
                                        <p className="Dasboard-p word-break-dash  m-0 text-start">: {ele.RoleId.RoleName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                :
                <div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>
                }
                
                
            </div>
            <div className="d-flex justify-content-between mt-3 mb-2 align-items-end">
                <h4 className="Heading-h4">Ticket Deails</h4>
                <button className="Btn-class">View Tickets</button>
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                {DashboardDetails.TicketsArray.length>0?
                DashboardDetails.TicketsArray.map((x,i)=>
                    <div className=" col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                    <div className="content-div h-100">
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Ticket Raised By</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.UserId.UserName}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Desigination</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.UserId.Desigination}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Descrption</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.TicketDescription}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Ticket Status</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.TicketStatus == 0?'Pending':x.TicketStatus == 1?"InProcess":"Resolved"}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Assigned To</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">:  {x.SysAdminId.UserName}</p>
                            </div>
                        </div>
                        {x.TicketStatus == 0&&
                        <div className="row w-100 mx-auto mt-2">
                            <button className="asign-btn">Re-Assign Admin</button>
                        </div>}
                    </div>
                </div>
                )
                
                :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>
                }
                

                {/* <div className=" col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                    <div className="content-div h-100">
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Ticket Raised By</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Name</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Desigination</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Technology Enabler</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Descrption</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Ticket Status</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Pending</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Worked By</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: <button className="asign-btn">Assign Admin</button></p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
