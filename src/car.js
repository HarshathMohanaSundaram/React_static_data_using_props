import React from 'react';

function Car(props) {
    return ( 
        <>
        {props.cars.map(cars => {
            return <div class='card' key={cars.id}>
                <img src={cars.image} alt = {cars.name}/>
                <div class="container">
                    <h4><b>{cars.name}</b></h4> 
                     <p>Year : {cars.year}</p> 
                </div>
        </div>;
      })}
        </>
     );
}

export default Car;