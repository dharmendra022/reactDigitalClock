import React, { useState } from "react";






const Digitalclock=()=>{
    let time= new Date().toLocaleTimeString();

const[ctime, setCtime] = useState(time);

const UpdateTime = ()=>{
    let time= new Date().toLocaleTimeString();
    setCtime(time);


}  
setInterval(UpdateTime,1000)
    return(
        <>
        <div className="c">
        <h1 id="cTime" >{ctime}</h1>
        </div>
        {/* <button onClick={UpdateTime}></button> */}
        </>
    )
}
export default  Digitalclock;