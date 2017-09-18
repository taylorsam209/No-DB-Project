import React from 'react';

function Input (props) {
    return(
        <div className = "InputContainer">
            <h2> Choose a city to see the weather!</h2>
            <input className='input' type= 'text' placeholder="Enter US City" onChange = {(e) => {props.updateCity(e.target.value)}}/>
            <button className = 'button' onClick = {() => {props.getWeather(props.city)} } >Submit</button>
            </div>
    )
}

export default Input;