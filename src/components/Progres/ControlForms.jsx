
import s from './ControlForms.module.css';
import * as React from "react";

export const ControlForms = ({input,meta,...props}) => {
    const bag = meta.touched&&meta.error;
    return (
    <div className={s.formWrapper +''+ (bag && s.error) }>
        <div>
            {React.createElement(props.el,{...input,...props})}
        </div>
        {bag&&<span>{meta.error}</span>}
    </div>
    )
}


export const Textarea =props=>{
  return  <ControlForms el="textarea"{...props}/>
}
export const Input =props=><ControlForms el="input"{...props}/>

