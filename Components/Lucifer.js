"use client"
import React, { useEffect, useState } from 'react'
import Login from './Login'
import Session from './Session'

const Lucifer = () => {
    const [session, setSession] = useState(false)
    const [sessionid, setSessionID] = useState("")
    const [alert_type, setAlert_type] = useState("")
    const [data, setData] = useState(null)
    
   
    const AlertMessage = (alt) => {
        setAlert_type(alt)
        setTimeout(() => {
            setAlert_type("") 
        }, 3000);
    }


    useEffect(() => {
        if(session){
            AlertMessage("success")
        } else {
            AlertMessage("logoff")
        }
    }, [session])


    return (
        <div className='w-full h-full relative'>
            {alert_type === "success" && (
                <div className=' absolute  z-20 top-0 right-0 left-0 p-3 flex justify-center items-center bg-green-700 text-white'>
                    Signin successful
                </div>
            )}
            {alert_type === "logoff" && (
                <div className=' absolute top-0  z-20 right-0 left-0 p-3 flex justify-center items-center bg-red-700 text-white'>
                    You have signed out
                </div>
            )}

            {session ?
            <Session setSession={setSession} sessionid={sessionid} data={data} />
            :
            <Login setSession={setSession}  setSessionID={setSessionID}  setData={setData} />
            }
        </div>
    )
}

export default Lucifer