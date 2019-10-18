import React from 'react';

const Clima = ({resultado}) => {
    const {name, main} = resultado;
    if(!name) return  null;
    const kelvin = 273.15;

    console.log(resultado);
    return (
        <div className='card-panel white col s12'>
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">{parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span></p>
                <p>Maxima Temperatura: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>Minima Temperatura: {parseInt(main.temp_min - kelvin, 10)}</p>
            </div>
        </div>
    );
};

export default Clima;