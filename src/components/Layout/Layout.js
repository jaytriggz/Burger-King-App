import React from "react";
import Auxilliary from '../../hoc/Auxilliary'
import classes from '../Layout/Layout.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const layout = (props) =>{
    return(
        <Auxilliary>
            <div className={classes.tsb}>toolbar, side-drawer, backdrop <GiHamburgerMenu/></div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxilliary>
    )
}
export default layout