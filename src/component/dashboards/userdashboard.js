import React from "react";

export default function UserDashboard () {
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">DashBoard</h2>
            <div className="d-flex justify-content-between mb-2 align-items-end">
                <h4 className="Heading-h4">Resolved Tickets</h4>
                <button className="Btn-class">View All Tickets</button>
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
            <div className=" col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
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
                
            </div>
            <div className="d-flex justify-content-between mt-3 mb-2 align-items-end">
                <h4 className="Heading-h4">Pending Tickets</h4>
                {/* <button className="Btn-class">View Tickets</button> */}
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                <div className=" col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
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
                                <p className="Dasboard-p font-bold m-0 text-start">Assigned By</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}