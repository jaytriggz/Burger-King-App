import React from "react";
import classes from '../../components/Bread/Bread.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Bread =(props) =>{
    let newIngredients = Object.keys(props.ingredients).map((igKey) =>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        })
    }).reduce((arr,el)=> {
        return arr.concat(el)
    },[])
    if (newIngredients.length === 0) {
        newIngredients = <h1>PLEASE START ADDING INGREDIENTS</h1>
    }
    return(
        <div className={classes.Bread}>
            
            <BurgerIngredient type = 'bread-top'></BurgerIngredient>
            {newIngredients}
            <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
        </div>
    )
}
    




export default Bread;