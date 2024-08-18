"use client"
import Image from "next/image";
import React, { useState } from 'react'
import { Client, Databases, ID } from "appwrite";

const Login = ({ setSession, setSessionID, setData }) => {

    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);
    const databases = new Databases(client);

  const [loading, setLoading] = useState(false)
  const [api, setAPI] = useState("")
  const [message, setMessage] = useState("")

  const Login = () => {
    setLoading(true)
    if(api === ""){
        setMessage("Enter API Key");
        setTimeout(() => {
            setMessage("");
        }, 2000);
        setLoading(false)
        return false;
    }
    const promise = databases.getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        api
    );
    promise.then(function (response) {
        setSession(true)
        setSessionID(api)
        setData(response)
    }, function (error) {
        setMessage("Invalid API KEY")
        setLoading(false)
    });
  }



  return (
    <div className="w-full h-full">
          <div className="h-[30%] flex justify-center items-center">
                <Image src="/logo.png" width={200} height={200} />
          </div>
          <div className="h-[60%] flex flex-col  justify-center space-y-2 items-center">
              {message && (
              <div className="bg-red-700  z-20 text-xs text-center text-white p-3 rounded-md w-[80%]">
                        {message}
              </div>
              )}
              <div class="w-[80%]">
                <div class="relative w-full h-10">
                  <input value={api} onChange={(e) => setAPI(e.target.value)}
                    className="peer w-full h-full bg-transparent text-gray-100 text-center hover:text-green-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-green-700"
                    placeholder="ENTER LUCIFER API KEY" />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-100 peer-focus:text-green-700 before:border-green-700 peer-focus:before:!border-green-700 after:border-green-700 peer-focus:after:!border-green-700">API KEY</label>
                </div>
              </div> 
              <button onClick={!loading ? Login : console.log("Wait...")} class={`w-[80%] ${loading && "opacity-30"} bg-gray-300 hover:bg-green-700 text-gray-800 hover:text-gray-100 font-bold py-2 px-4 rounded-r`}>
                {loading ? "Signing in ..." : "Log in"}
              </button>
          </div>
          <div className="h-[10%] flex justify-center items-center">
            <div className="text-xs text-gray-200 font-semibold">LUCIFER 17</div>
          </div>
        </div> 
  )
}

export default Login