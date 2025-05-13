import React from "react";
const NOOP={}
export default function InputField({inputchange=NOOP,Blur=NOOP,placeholder,classname,errors,InputName}){
    return(
        <>
        <input type="text" placeholder={placeholder}  className={classname}  onChange={inputchange} onBlur={Blur}/>
        {errors[InputName]!=''&&<div className="error-class mb-1 text-start">{errors[InputName]}</div>}
        </>
    )
} 