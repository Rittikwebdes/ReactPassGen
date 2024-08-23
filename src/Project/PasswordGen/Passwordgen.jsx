import React, { useState } from 'react'
import "./Passwordgen.css"
import { LC, NC, SC, UC } from '../PasswordGen/passChar.jsx'
import { NotificationManager,NotificationContainer } from 'react-notifications'

export default function PasswordGen() {
let[uppercase,setUpperCase]=useState(false)
let[lowercase,setLowerCase]=useState(false)
let[number,setNumber]=useState(false)
let [symbols,setSymbols]=useState(false)
let[passLength,setPassLength]=useState(10)
let[fPass,setfPass]=useState("")

let createPassword=()=>{
  let charSet='';
  let finalPass=""

if(uppercase || lowercase || number || symbols){
if(uppercase) charSet+= UC;
if(lowercase) charSet+= LC;
if(number) charSet += NC;
if(symbols) charSet += SC
for(let i=0;i<passLength;i++){
  finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
}
setfPass(finalPass)
NotificationManager.success("Congrats..You got your Password")
}else{
NotificationManager.error("Please select at least one Checkbox...")
}
}
let copyPass=()=>{
  navigator.clipboard.writeText(fPass)
}
  return (
 <>
 <NotificationContainer/>
<div className="passwordBox">
<h2>Password Generator</h2>
<div className='PassBoxIn'>
  <input className='bg bg-secondary'  value={fPass} type="text"  readOnly/>
  <button onClick={copyPass} className='btn btn-primary'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"></path></svg></button>
</div>
<div className='passLength'>
<label htmlFor="">
  Password Length:
</label>
<input type="number" value={passLength} onChange={(event)=>setPassLength(event.target.value)} max={20} min={5}/>
</div>
<div className='passLength'>
<label htmlFor="">
  Including Upper Case:
  
</label>
<input type="checkbox" checked={uppercase} onChange={()=>setUpperCase(!uppercase)} />
</div>
<div className='passLength'>
<label htmlFor="">
  Including Lower Case:

</label>
<input type="checkbox" onChange={()=>setLowerCase(!lowercase) }/>
</div>
<div className='passLength'>
<label htmlFor="">
  Including Numbers:

</label>
<input type="checkbox" onChange={()=>setNumber(!number)} />
</div>
<div className='passLength'>
<label htmlFor="">
  Including Symbols:

</label>
<input type="checkbox" onChange={()=>setSymbols(!symbols)} />
</div>
<button className='btn btn-primary text-center' onClick={createPassword}> Generate Password</button>
</div>
 </>
  )
}
