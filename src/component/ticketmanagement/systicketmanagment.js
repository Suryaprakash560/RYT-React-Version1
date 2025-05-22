import React, { useEffect, useState } from "react";
import Select from "react-select";
import CustomStyle from '../customstyle/customstyle';
import {GetallSysadmTickets,UpdateTicket} from '../methods/method'
export default function SysticketManagment (){
    const [SysTicketDetsils, setSysTicketDetsils] = useState({
        TicketId : '',
        UserName : "",
        Desigination : '',
        Description : '',
        TicketStatus : {},
        RaisedById : '',
        Worksdone : '',
        StatusArray:[{value:0,label:'Pending'},{value:1,label:'InProcess'},{value:2,label:'Resolved'}],
        error:{},
        TicketsArray : [],
        AdmId :''
    })

    useEffect(()=>{
        if(window.matchMedia("('min-width:991px')").matches){
            let findelement = document.getElementById('Hole-height').offsetHeight
            document.getElementById('Setnew-height').style.height = findelement+'px'
            document.getElementById('Setnew-height').style.maxHeight = findelement+'px'
        }
        onload() 
    },[])

    const onload =async() =>{
        let TicketArray =[]
        await GetallSysadmTickets().then(res=>{
            TicketArray = res.length>0?res :[]
            
        })
        setSysTicketDetsils({
                ...SysTicketDetsils,
                TicketsArray : TicketArray
            })
    }
    const Handlechange = (name,e) =>{
        setSysTicketDetsils({
            ...SysTicketDetsils,
            [name] : e.target.value
        })
    }

    const OnBlurvalidation=(name)=>{
        let Error = SysTicketDetsils.error;
        let flage = true
        if(SysTicketDetsils[name] == ''){
            Error[name] = "* Please Enter " + name
            flage = false
        }
        else{
            Error[name] = ''
            flage = true
        }
        setSysTicketDetsils({
            ...SysTicketDetsils,
            error : Error
        })
        return flage
    }

    const SelectStatus = (Selectedoption) =>{
        setSysTicketDetsils({
            ...SysTicketDetsils,
            TicketStatus:Selectedoption
        })
    }
    const EditRequest = (data) =>{
        console.log(data.SysAdminId)
        let Seleted = SysTicketDetsils.StatusArray.filter(x=>x.value == data.TicketStatus)[0]
        setSysTicketDetsils({
            ...SysTicketDetsils,
            TicketId : data._id,
            UserName : data.UserId.UserName,
            Desigination : data.UserId.Desigination,
            Description : data.TicketDescription,
            TicketStatus:Seleted,
            RaisedById : data.UserId._id,
            AdmId : data.SysAdminId,
            Worksdone : data.WorksDone,
            
            error : {}
        })
    }
    const Discard = () =>{
        setSysTicketDetsils({
            ...SysTicketDetsils,
            TicketId : '',
            UserName : "",
            Desigination : '',
            Description : '',
            TicketStatus : {},
            RaisedById : '',
            Worksdone : '',
        })
    }
    const GetallUpdatedtickets = async() =>{
        let TicketArray =[]
        await GetallSysadmTickets().then(res=>{
            TicketArray = res.length>0?res :[]
            
        })
        setSysTicketDetsils({
                ...SysTicketDetsils,
                TicketsArray : TicketArray,
                TicketId : '',
                UserName : "",
                Desigination : '',
                Description : '',
                TicketStatus : {},
                RaisedById : '',
                Worksdone : '',
                AdmId :'',
            })
    }
    const UpdateTickets = () =>{
       
        if(SysTicketDetsils.TicketStatus.value == 2){
             let Error = SysTicketDetsils.error;
            let wrkdone = OnBlurvalidation("Worksdone")
            let StatusSeleted = SysTicketDetsils.TicketStatus.value !=undefined ? true : false

            if(!StatusSeleted){
                Error.Status = "* Please Select Status"
            }
            else{
                Error.Status = ""
            }
            setSysTicketDetsils({
            ...SysTicketDetsils,
            error : Error
            })
            if(wrkdone && StatusSeleted){
                UpdateTicket(SysTicketDetsils.Description,SysTicketDetsils.TicketStatus.value,SysTicketDetsils.AdmId,SysTicketDetsils.Worksdone,SysTicketDetsils.TicketId,SysTicketDetsils.RaisedById).then(res=>{
                    GetallUpdatedtickets()
                })
            }
        }
        else{
            let Error = SysTicketDetsils.error;
            let StatusSeleted = SysTicketDetsils.TicketStatus.value !=undefined ? true : false

            if(!StatusSeleted){
                Error.Status = "* Please Select Status"
            }
            else{
                Error.Status = ""
            }
            setSysTicketDetsils({
            ...SysTicketDetsils,
            error : Error
            })
          if(StatusSeleted){
                UpdateTicket(SysTicketDetsils.Description,SysTicketDetsils.TicketStatus.value,SysTicketDetsils.AdmId,SysTicketDetsils.Worksdone,SysTicketDetsils.TicketId,SysTicketDetsils.RaisedById).then(res=>{
                    GetallUpdatedtickets()
                })
            }  
        }
        
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
                                {SysTicketDetsils.TicketsArray.length>0?
                                    SysTicketDetsils.TicketsArray.map((ele,ind)=>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2" key={ind}>
                                    <div className="content-div h-100 position-relative">
                                        <div className="menuIcon d-flex" >
                                            <div className="Edit-dlt me-2" onClick={()=>{EditRequest(ele)}}>
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Ticket Raised By</p>
                                            </div>
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: {ele.UserId.UserName}</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Desigination</p>
                                            </div>
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: {ele.UserId.Desigination}</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Issue</p>
                                            </div>
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: {ele.TicketDescription}</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Ticket Status</p>
                                            </div>
                                            <div className="col-6 p-0">
                                                <p className={ele.TicketStatus == 0?"normal-p-tag  m-0 text-start Redclr" :ele.TicketStatus == 1? "normal-p-tag  m-0 text-start YellowClr font-bold" : "normal-p-tag  m-0 text-start greenclr"}>: {ele.TicketStatus == 0?'Pending':ele.TicketStatus == 1?"InProcess":"Resolved"}</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto">
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag font-bold m-0 text-start">Worked's Done</p>
                                            </div>
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: {ele.WorksDone ==''?'NA':ele.WorksDone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )
                                :<div className="no-record-clr d-flex justify-content-center align-items-center w-100 h-auto">No Records</div>
                                }
                                
                                {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                                    <div className="content-div h-100 position-relative">
                                        <div className="menuIcon d-flex" >
                                            <div className="Edit-dlt me-2">
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                            </div>
                                        </div>
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
                                                <p className="normal-p-tag font-bold m-0 text-start">Assigned By</p>
                                            </div>
                                            <div className="col-6 p-0">
                                                <p className="normal-p-tag  m-0 text-start">: Name</p>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4 pe-0 " id="Hole-height">
                    <h4 className="Heading-h4 text-center">Edit</h4>
                    <div className="content-div mt-3">
                        <input type="text" placeholder="Raised By"  disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.UserName} />
                        <input type="text" placeholder="Desigination" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.Desigination} />
                        <textarea rows={5} type="number" placeholder="Description" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.Description} />
                        {/* <input type="text" placeholder="AssignedBy" disabled className="styled-input mb-1 w-100" value={SysTicketDetsils.AssignedBy} /> */}
                        <textarea type="text" rows={5} placeholder="* Works done"  className="styled-input mb-1 w-100" value={SysTicketDetsils.Worksdone} onChange={(e)=>{Handlechange("Worksdone",e)}} onBlur={()=>{OnBlurvalidation("Worksdone")}}/>
                        <div className="error-class mb-1 text-start">{SysTicketDetsils.error.Worksdone}</div>
                        <Select
                            placeholder = "* Select Status"
                            options={SysTicketDetsils.StatusArray}
                            styles={CustomStyle.CustomSelectStyle}
                            isSearchable={false}
                            isDisabled={false}
                            isLoading={false}
                            onChange={SelectStatus}
                            value={SysTicketDetsils.TicketStatus.label!==undefined ? SysTicketDetsils.TicketStatus : "*Select Status"}
                            className="mb-2"
                        />
                        
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <button className="Btn-class" onClick={Discard}>Discard</button>
                            <button className="Btn-class" onClick={UpdateTickets}>Save</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}