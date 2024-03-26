import { useState } from "react";

export default function Buttonitems({value, clickHandler, identification}) {


  return (
    <div className="buttonitem">
      <input type="button"  value={value} onClick={clickHandler} id={identification}/>
    </div>
  );
}
