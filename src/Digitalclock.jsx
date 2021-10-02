import React, { useState } from "react";



let time= new Date().toLocaleTimeString();

const[ctime, setCtime] = useState(time);

const UpdateTime = ()=>{
    let time= new Date().toLocaleTimeString();
    setCtime(time);


}
setInterval(UpdateTime,1000)


const Digitalclock=()=>{
    return(
        <>
        <h1>{ctime}</h1>
        {/* <button onClick={UpdateTime}></button> */}
        </>
    )
}
export default  Digitalclock;