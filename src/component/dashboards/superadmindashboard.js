import React from "react";
import Userimg from '../../assests/images/Userimg.png'
export default function SuperAdminDashboard () {

    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">DashBoard</h2>
            <div className="d-flex justify-content-between mb-2 align-items-end">
                <h4 className="Heading-h4">User Details</h4>
                <button className="Btn-class">Create User</button>
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                <div className="col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                    <div className="content-div">
                        <div className="row mb-2">
                            <div className="col-3">
                                <div className="User-img-width">
                                    <img src={Userimg} className="w-100"/>
                                </div>
                            </div>
                            <div className="col-9 d-flex align-items-center justify-content-end">
                                <div className="Edit-dlt me-3">
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
                                <p className="Dasboard-p  m-0 text-start">: Name</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Email</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Name@skillablers.com</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Mobile.No</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: 986526412</p>
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
                    </div>
                </div>
                
            </div>
            <div className="d-flex justify-content-between mt-3 mb-2 align-items-end">
                <h4 className="Heading-h4">Ticket Deails</h4>
                <button className="Btn-class">View Tickets</button>
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                <div className=" col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                    <div className="content-div">
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
                                <p className="Dasboard-p  m-0 text-start">: Technology</p>
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
                                <p className="Dasboard-p  m-0 text-start">: Closed</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Worked By</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Srinivas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                    <div className="content-div">
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
                </div>
            </div>
        </div>
    )
}