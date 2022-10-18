import React from "react";

const ToDoLIst = (props) => {
  

  return (
    <>
      <div className="tudo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={()=>{
               props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoLIst;
