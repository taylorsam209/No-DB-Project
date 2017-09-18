import React from 'react';

function Currentweather(props){

    return( 
        <div>
             <h1 className = "city">{props.city}</h1>
        <div className = "weathercontainer">
            <section className = 'leftbox'>
                <h1 className = 'temp'> Temp:{props.temp}</h1>
                <p className ='humidity'> Humidity{props.humidity}</p>
                </section> 
                <section className = 'rightbox'>
                <h2 className = 'status'>Status: {props.weather}</h2>
                <p className = 'description'>Description:{props.description}</p>
                </section>

            </div>
            </div>
    )

}


export default Currentweather;
