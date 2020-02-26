import React, {useState, useEffect} from 'react'
import Item from './Items/Item'
import classes from './Container.module.css'

function Container() {

    const  [items, setItems] = useState([
       { name: 'blue shirt', price: 15, id: 1},
       { name: 'red shirt', price: 12, id: 2},
       { name: 'yellow shirt', price: 18, id: 3}
    ])
    
    console.log(counter)
    return(
        <div >
        <h2>List of items</h2>
        {items.map(item => (
            <Item 
            key={item.id}
            name={item.name} 
            price={item.price}
            maara={maara}/>
        ))}
       
        </div>
    )
}
export default Container;