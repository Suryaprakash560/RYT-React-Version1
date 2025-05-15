import axios from "axios";
import { APIurl } from "../../assests/js/config";

export function GetAllRole(){
    return(axios({
        url : APIurl + '/getroles',
        method : 'GET'
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
)
}