import React from "react";
import classes from "../BuildControl/BuildControl.module.css"


const BuildControl = (props) =>{
    return(
        
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick = {props.added}>Add</button>
            <button className={classes.Less} onClick = {props.delete} disabled = {props.disabled}>Delete</button>
        </div>
        
    )
}


export default BuildControl;