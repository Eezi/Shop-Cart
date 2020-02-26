import React, {useState} from 'react'
import classes from './Item.module.css'

function Item(props) {

    const [counter, setCounter] = useState(0)

    const maara = () => {
        setCounter(counter + 1)
       
    }

    return(
        <div >
            <ul style={{listStyleType: 'none', display: 'flex'}} >
                <li className={classes.Item}>
                   <h3>{props.name}</h3>
                   <h3>{props.price} €</h3>
                   <button onClick={() => maara}>ADD CART</button>
                </li>
            </ul>
            

        </div>
    )
}
export default Item;