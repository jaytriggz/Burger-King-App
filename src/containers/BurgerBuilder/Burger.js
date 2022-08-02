import React, { Component } from "react";
import Auxilliary from "../../hoc/Auxilliary";
import Bread from "../../components/Bread/Bread";
import BuildControls from "../../components/Bread/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 100,
    bacon: 70,
    meat: 10
}
class Burger extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },
        totalPrice: 500,
        purchaseable: false
    }
    updatePurchaseState(){
        const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey]
        }).reduce((sum, el)=>{
            return sum = el
        }, 0)
        this.setState({purchaseable: sum >0})
    }
    addIngredients = (type) =>{
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount+1
        const updatedIngredients = {...this.state.ingredients}

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice +priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }
    deleteIngredient = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceDeletion = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeletion
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        })
    }
    

   render(){
    const disabledInfo = {
        ...this.state.ingredients
    }
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key]<=0
    }

    return(
        <Auxilliary>
            <Bread ingredients = {this.state.ingredients}></Bread>
            <BuildControls
            purchaseable = {this.state.purchaseable}
            price = {this.state.totalPrice}
            disabled = {disabledInfo}
            ingredientAdded = {this.addIngredients}
            ingredientDelete = {this.deleteIngredient}>
            </BuildControls>
        </Auxilliary>
        
    )
   }
}
export default Burger;