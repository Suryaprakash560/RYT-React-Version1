import React, { useEffect, useState } from "react";
import {Getallusertickets,UpdateTicket} from '../methods/method'
import { Routing } from "../../assests/js/routing";
export default function UserDashboard () {

    const [TicketArray,setTicketArray] = useState({
        TickersArray :[]
    })
    useEffect(()=>{
        onload()
    },[])

    const onload = async() =>{
        let TicketArrayview=[]
        await Getallusertickets().then(res=>{
            TicketArrayview = res.length>0?res:[]
        })
        setTicketArray({
            ...TicketArray,
            TickersArray:TicketArrayview
        })
    }
    const Redirectpage = (Url) =>{
        window.location.href = Url
    }
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">DashBoard</h2>
            <div className="d-flex justify-content-between mb-2 align-items-end">
                <h4 className="Heading-h4">Resolved Tickets</h4>
                <button className="Btn-class" onClick={()=>{Redirectpage(Routing.UserTicket)}}>View All Tickets</button>
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                {TicketArray.TickersArray.filter(ele=>ele.TicketStatus == 2).length>0?
                <>
                    {TicketArray.TickersArray.filter(ele=>ele.TicketStatus == 2).map((x,i)=>
                     <div className=" col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 ms-1 me-2" key={i}>
                    <div className="content-div h-100">
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
                                <p className={x.TicketStatus == 0?"Dasboard-p  m-0 text-start Redclr" :x.TicketStatus == 1? "Dasboard-p  m-0 text-start YellowClr font-bold" : "Dasboard-p  m-0 text-start greenclr"}>: {x.TicketStatus == 0?'Pending':x.TicketStatus == 1?"InProcess":"Resolved"}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Worked By</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.SysAdminId.UserName}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Works Done</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.WorksDone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    )}
                
                </>
                :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>}
           
                
            </div>
            <div className="d-flex justify-content-between mt-3 mb-2 align-items-end">
                <h4 className="Heading-h4">Pending Tickets</h4>
                {/* <button className="Btn-class">View Tickets</button> */}
            </div>
            <div className="Inside-Content-container dark-mode d-flex">
                {TicketArray.TickersArray.filter(ele=>ele.TicketStatus != 2).length>0?
                <>
                    {TicketArray.TickersArray.filter(ele=>ele.TicketStatus != 2).map((x,i)=>
                    <div className=" col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
                    <div className="content-div h-100">
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
                                <p className={x.TicketStatus == 0?"Dasboard-p  m-0 text-start Redclr" :x.TicketStatus == 1? "Dasboard-p  m-0 text-start YellowClr font-bold" : "Dasboard-p  m-0 text-start greenclr"}>: {x.TicketStatus == 0?'Pending':x.TicketStatus == 1?"InProcess":"Resolved"}</p>
                            </div>
                        </div>
                        <div className="row w-100 mx-auto">
                            <div className="col-6 p-0">
                                <p className="Dasboard-p font-bold m-0 text-start">Assigned To</p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="Dasboard-p  m-0 text-start">: {x.SysAdminId.UserName}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    )}
                </>
                :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>
                }
                
            </div>
        </div>
    )
}