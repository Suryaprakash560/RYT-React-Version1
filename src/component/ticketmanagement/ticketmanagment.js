import React, { useState,useEffect } from "react";
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';
import {Getalluser,GetallTickets} from '../methods/method';

export default function TicketManagment () {
    const [TicketInfo , setTicketInfo] = useState({
        TicketId : 0,
        TicketsArray : [],
        AdminArray : [],
        SelectedAdmin : {}
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
            await GetallTickets().then(res=>{
                    TicketArray = res.length>0?res:[]
                })
            setTicketInfo({
                ...TicketInfo,
                AdminArray : valuelable,
                TicketsArray : TicketArray
            })
        }

    const SelectRole = (Selectedoption) =>{
        setTicketInfo({
            ...TicketInfo,
            SelectedAdmin:Selectedoption
        })
    }
    const CancelSeleted = () =>{
        setTicketInfo({
            ...TicketInfo,
            SelectedAdmin:{}
        })
    }
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">Ticket Management</h2>
            <div className="Inner-pages-container">
                <div className="row">
                    {TicketInfo.TicketsArray.length>0?
                    TicketInfo.TicketsArray.map((x,i)=>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                        <div className="content-div h-100">
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Ticket Raised By</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: {x.UserId.UserName}</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Desigination</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: {x.UserId.Desigination}</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Descrption</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: {x.TicketDescription}</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Ticket Status</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: {x.TicketStatus == 0?'Pending':x.TicketStatus == 1?"InProcess":"Resolved"}</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Assigined To</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: {x.SysAdminId.UserName}</p>
                                </div>
                            </div>
                            {x.TicketStatus == 0&&
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Re-Assign</p>
                                </div>
                                <div className="col-6 p-0">
                                        <Select
                                            placeholder = "*Select Admin"
                                            options={TicketInfo.AdminArray}
                                            styles={CustomStyle.CustomSelectStyle}
                                            value = {TicketInfo.SelectedAdmin.label !==undefined?TicketInfo.SelectedAdmin:"*Select Admin"}
                                            onChange={SelectRole}
                                        />
                                        {TicketInfo.SelectedAdmin.label !==undefined&&
                                        <div className="d-flex justify-content-between">
                                            <button className="asign-btn mt-2" onClick={CancelSeleted}>Cancel</button>
                                            <button className="asign-btn mt-2">Assign</button>
                                        </div>
                                        }
                                </div>
                            </div>}
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Worked's Done</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: {x.WorksDone ==''?'NA':x.WorksDone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    
                    :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>}
                    
                    {/* <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                        <div className="content-div h-100">
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Ticket Raised By</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: Name</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Desigination</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: Technology</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Descrption</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Ticket Status</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: Pending</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Worked By</p>
                                </div>
                                <div className="col-6 p-0">
                                        <Select
                                            placeholder = "*Select Admin"
                                            options={TicketInfo.AdminArray}
                                            styles={CustomStyle.CustomSelectStyle}
                                            value = {TicketInfo.SelectedAdmin.label !==undefined?TicketInfo.SelectedAdmin:"*Select Admin"}
                                            onChange={SelectRole}
                                        />
                                        {TicketInfo.SelectedAdmin.label !==undefined&&
                                        <div className="d-flex justify-content-between">
                                            <button className="asign-btn mt-2" onClick={CancelSeleted}>Cancel</button>
                                            <button className="asign-btn mt-2">Assign</button>
                                        </div>
                                        }
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Worked's Done</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: NA</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}