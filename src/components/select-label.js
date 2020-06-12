import React, {useState} from "react";

export default (props) => {
    let [selected,setSelected]=useState("bug")
    let options = [{name:"good first issue",value:"good+first+issue"},
    {name:"bug", value:"bug"},
    {name:"help wanted",value:"help+wanted"}]


    let onClickFunction = (option)=>{
        setSelected(option.value)
        props.func(option.value)

    }


    return (
      <div className="w-custom mx-auto py-8">
      <h1 className="font-bold text-2xl"> Select a Label</h1>

    <div className="mx-auto py-6 flex justify-between flex-wrap">
     
     
      {options.map((option)=>{
      return(<div onClick={()=>onClickFunction(option)} tabIndex={0} className={"w-64 bg-white rounded-lg focus:shadow-green  focus:outline-none shadow-md p-5 hover:cursor-pointer hover:bg-green-400 mb-8"+ (selected===option.value?" bg-green-200 shadow-green":"")}>
        <div className="flex justify-center items-center ">
          <h1 className="uppercase font-medium text-base tracking-wide text-green-900">
            {option.name}
          </h1>
        </div>
      </div>)
      })}
    </div>
    </div>
  );
};
