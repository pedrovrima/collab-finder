import React, {useState} from "react"
import axios from "axios"
import SelectFramework from "./components/select-framework.js"
import SelectLabel from "./components/select-label.js"
import ResultTable from "./components/result-table.js"


export default function  (){
// const getUser =async ()=>{
//     await axios.get("github-user")
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const code = urlParams.get('code')
//     console.log(code)
//     // await axios.post("github-code",{data{code:code}})

// }


    return(
        <div className="min-h-screen bg-gray-200 font-sans ">
        <a href="https://github.com/login/oauth/authorize?client_id=c51cdb14984bd8e00918&redirect_uri=http://localhost:3000/auth
" className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
                Get USer

            </a>
            </div>


        )

}