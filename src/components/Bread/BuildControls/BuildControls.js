import React from "react";
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const Control = [
    {Label: "cheese", type: "cheese"},
    {Label: "salad", type: "salad"},
    {Label: "meat", type: "meat"},
    {Label: "bacon", type: "bacon"},
]
const BuildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
           <h1>PRICE: {props.price}</h1>
            {
                Control.map((ctrl)=>{
                    return(
                        <BuildControl 
                        key={ctrl.Label} 
                        label={ctrl.Label} 
                        disabled = {props.disabled[ctrl.type]}
                        added = {()=>props.ingredientAdded(ctrl.type)}
                        delete = {()=>props.ingredientDelete(ctrl.type)}>
                        </BuildControl>
                    )
                })
            }
        </div>
    )
}


export default BuildControls;