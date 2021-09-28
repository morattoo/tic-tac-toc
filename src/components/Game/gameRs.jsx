import React from 'react'

export const GameRs = (props) => {
    /* const [saludo, setSaludo] = React.useState("Hello World");
    const [squares, setSquares] = React.useState(Array(9).fill(null));  */
    const [casa, setCasa] = React.useState({
        ventanas: 4,
        color: 'black',
        rooms: [{
            color: "black",
            beds:2
        }
            
        ]
    });

    const text = `My casa es de color ${casa.color} y tiene ${ casa.ventanas} ventanas.`;

    const updateHouseColor = ()=>{
        setCasa({...casa, color:'blue'})
    }

    return (
        <div>
            <button onClick={() => updateHouseColor()}>ds</button>
            <div>{casa.color}</div>
            <div>{text}</div>
        </div>
    )
}
