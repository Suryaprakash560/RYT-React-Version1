import axios from "axios";
import { APIurl } from "../../assests/js/config";

export function GetAllRole(){
    return(axios({
        url : APIurl + '/api/getroles',
        method : 'GET',
        withCredentials : true
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
)
}


export function Saveuser(UserName,Email,Password,MobileNumber,Desigination,ProfileImage,RoleId){
    return(axios({
        url : APIurl + '/api/saveuserinfo',
        method : 'POST',
        withCredentials : true,
        data : {
            UserName : UserName,
            Email : Email,
            Password: Password,
            MobileNumber : MobileNumber,
            Desigination : Desigination,
            ProfileImage : ProfileImage,
            RoleId : RoleId
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
)
}

export function Getalluser(){
    return(axios({
        url : APIurl + '/api/getalluser',
        method : 'GET',
        withCredentials : true,
        data : {
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
)
}

export function Edituser(UserId,UserName,Email,Password,MobileNumber,Desigination,ProfileImage,RoleId){
    return(axios({
        url : APIurl + '/api/edituser',
        method : 'POST',
        withCredentials : true,
        data : {
            UserId:UserId,
            UserName : UserName,
            Email : Email,
            Password: Password,
            MobileNumber : MobileNumber,
            Desigination : Desigination,
            ProfileImage : ProfileImage,
            RoleId : RoleId
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
)
}

export function Deleteuser(UserId){
    return(axios({
        url : APIurl + '/api/deleteuser',
        method : 'DELETE',
        withCredentials : true,
        data : {
            UserId:UserId,
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
)
}

export function UsersLogin (Email,Password){
    return(axios({
        url : APIurl + '/api/Login',
        method : 'POST',
        withCredentials : true,
        data : {
            Email : Email,
            Password : Password 
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function Getsession (){
    return(axios({
        url : APIurl + '/api/getsession',
        method : 'GET',
        withCredentials : true,
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function Logout (){
    return(axios({
        url : APIurl + '/api/logout',
        method : 'GET',
        withCredentials : true,
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function Saveticket (TicketDescription,TicketStatus,SysAdminId,WorksDone){
    return(axios({
        url : APIurl + '/api/saveticket',
        method : 'POST',
        withCredentials : true,
        data : {
            TicketDescription : TicketDescription,
            TicketStatus : TicketStatus,
            SysAdminId : SysAdminId,
            WorksDone : WorksDone
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function Getallusertickets (){
    return(axios({
        url : APIurl + '/api/getallusertickets',
        method : 'POST',
        withCredentials : true,
        data : {
            
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function GetallSysadmTickets (){
    return(axios({
        url : APIurl + '/api/getallsysadmtickets',
        method : 'POST',
        withCredentials : true,
        data : {
            
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function UpdateTicket (TicketDescription,TicketStatus,SysAdminId,WorksDone,TicketId){
    return(axios({
        url : APIurl + '/api/updateticket',
        method : 'POST',
        withCredentials : true,
        data : {
           TicketDescription : TicketDescription,
           TicketStatus : TicketStatus,
           SysAdminId : SysAdminId,
           WorksDone : WorksDone,
           TicketId : TicketId 
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}

export function GetallTickets (){
    return(axios({
        url : APIurl + '/api/getallTickets',
        method : 'GET',
        withCredentials : true,
        data : {
           
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    }))
}
