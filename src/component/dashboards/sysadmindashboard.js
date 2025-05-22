import React, { useEffect, useState } from "react";
import {GetallSysadmTickets} from '../methods/method';

export default function SysAdminDashboard () {

    const [SysadmDashboard, setSysadmDashboard] = useState({
        TicketsArray : [],
        TotalTickets : 0,
        InprogressTicket : 0,
        completedTickets : 0
    })
    useEffect(()=>{
        onload()
    },[])

    const onload = async() =>{
        let TicketArray =[]
        await GetallSysadmTickets().then(res=>{
            TicketArray = res.length>0?res :[]
        })
        setSysadmDashboard({
            ...SysadmDashboard,
            TicketsArray : TicketArray,
            TotalTickets : TicketArray.length,
            InprogressTicket : TicketArray.filter(x=>x.TicketStatus==1).length,
            completedTickets : TicketArray.filter(x=>x.TicketStatus==2).length
        })

        let Totalticket = TicketArray.length;
        let InprogressTicket = TicketArray.filter(x=>x.TicketStatus==1).length/Totalticket*100
        let CompletedTickets = TicketArray.filter(x=>x.TicketStatus==2).length/Totalticket*100
        if(TicketArray.length>0){
            setTimeout(()=>{
                document.getElementsByClassName('Resolved-width')[0].style.width = CompletedTickets + '%'
                document.getElementsByClassName('Inprogress-width')[0].style.width = InprogressTicket + '%'
            },[100])
            
        }
        

    }
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">DashBoard</h2>
            <div className="row w-100 mx-auto">
                <div className="col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12 Inside-Content-container d-flex align-items-center">
                    <div className="w-100">
                        <h4 className="Heading-h4">TICKET GRAPH</h4>
                        {SysadmDashboard.TotalTickets !=0?
                        <div className="Total-Ticket">.<div className="Resolved-ticket Resolved-width spanidstyle" >.</div><div className="Inprogress-ticket Inprogress-width spanidstyle">   .</div></div> : <div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Tickets Assigned To you</div>}
                        <div className="row mt-2">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                                <div className="total-tickerbg box-height-width me-2"></div><span className="Ticketcount">Total Tickets : {SysadmDashboard.TotalTickets}</span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                                <div className="Resolved-ticket box-height-width me-2"></div><span className="Ticketcount d-flex align-items-center justify-content-end">Resolved Tickets : {SysadmDashboard.completedTickets}</span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                                <div className="Inprogress-ticket box-height-width me-2"></div><span className="Ticketcount d-flex align-items-center justify-content-end">Inprogress Tickets : {SysadmDashboard.InprogressTicket}</span>
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
                {SysadmDashboard.TicketsArray.length > 0?
                SysadmDashboard.TicketsArray.filter(ele=>ele.TicketStatus !=2).map((x,i)=>
                    <div className=" col-12 col-sm-6 col-lg-4 col-md-4 col-lg-4 ms-1 me-2">
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
                                <p className={x.TicketStatus == 0?"Dasboard-p  m-0 text-start Redclr" :x.TicketStatus == 1? "Dasboard-p  m-0 text-start YellowClr font-bold" : "Dasboard-p  m-0 text-start greenclr"}>: {x.TicketStatus == 0?'Pending':x.TicketStatus == 1?"InProcess":"Resolved"}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                )
                
                :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>
                }
                
            </div>
        </div>
    )
}