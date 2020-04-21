import React from 'react';
import './Listitems.css';
import FlipMove from 'react-flip-move';


function Listitems (props){
    let items = props.items;
    let listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <input id={item.key} value={item.text} onChange={(e) => {props.updateItem(e.target.value, item.key)}} />
                <span onClick={() => props.deleteItem(item.key)}>Delete</span>
            </div>
        )
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default Listitems;