import React, { useState } from "react";
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';

export default function TicketManagment () {
    const [TicketInfo , setTicketInfo] = useState({
        TicketId : 0,
        TicketArray : [],
        AdminArray : [{value : 1, label: 'srinivas'}],
        SelectedAdmin : {}
    })

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
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="content-div">
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
                                    <p className="normal-p-tag  m-0 text-start">: Closed</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Worked By</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: Srinivas</p>
                                </div>
                            </div>
                            <div className="row w-100 mx-auto">
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag font-bold m-0 text-start">Worked's Done</p>
                                </div>
                                <div className="col-6 p-0">
                                    <p className="normal-p-tag  m-0 text-start">: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="content-div">
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
                    </div>
                </div>
            </div>
        </div>
    )
}