import React, {useState} from "react";

export default (props) => {
    let [selected,setSelected]=useState("react")
    let options = [{name:"react"},
    {name:"angular"},
    {name:"vue"},
    {name:"jquery"}]


    let onClickFunction = (option)=>{
        setSelected(option.name)
        props.func(option.name)

    }


    return (
      <div className="w-custom mx-auto py-8">
      <h1 className="font-bold text-2xl"> Select a Framework/Library</h1>

    <div className="mx-auto py-6 flex justify-between flex-wrap">
     
     
      {options.map((option)=>{
      return(<div onClick={()=>onClickFunction(option)} tabIndex={0} className={"w-48 bg-white rounded-lg shadow-md p-5 hover:cursor-pointer focus:shadow-blue  focus:outline-none hover:bg-blue-400 mb-8"+ (selected===option.name?" bg-blue-200 shadow-blue":"")}>
        <div className="flex justify-center items-center ">
          <h1 className="uppercase font-medium text-base tracking-wide text-blue-900">
            {option.name}
          </h1>
        </div>
      </div>)
      })}
    </div>
    </div>
  );
};
