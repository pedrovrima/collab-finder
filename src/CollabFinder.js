import React, {useState,useEffect} from "react"
import axios from "axios"
import SelectFramework from "./components/select-framework.js"
import SelectLabel from "./components/select-label.js"
import ResultTable from "./components/result-table.js"
import fakeData from "./testdata"
console.log(fakeData)

export default function  (){
    var token = JSON.parse(window.sessionStorage.getItem("token"))

    useEffect(()=>{
        if(!token) window.location.href="/"
        


    })


    let [reposGotten,setRepos]=useState(fakeData.data)
    let [framework,setFrame]=useState("react")
    let [label,setLabel]=useState("bug")


    const getApiClick = async ()=>{
         let repos =await axios.post('/api/passwords',{data:{framework:framework,language:"javascript",label:label,token:token}})
        setRepos(repos.data)
        console.log(repos.data)
    }

const getUser =async ()=>{
    await axios.get("github-user")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code')
    console.log(code)
    // await axios.post("github-code",{data{code:code}})

}


    return(
        <div className="min-h-screen bg-gray-200 font-sans ">

            <div className="w-custom mx-auto">

                <SelectFramework func={setFrame}></SelectFramework>
                <SelectLabel func={setLabel}></SelectLabel>
            <button className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={()=>getApiClick()
                
            }>
                Get Stuff

            </button>
            <button className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={()=>getUser()
                
            }>
                Get USer

            </button>

{reposGotten.length?
<div className="flex justify-between">
<ResultTable repos={reposGotten}></ResultTable>
</div>:null

}       
            </div>
            </div>


        )

}