import React from 'react'

export const c2F = (kelvin) => {
    console.log("Kelvin Temp: ", kelvin);

    const fahrenheit = (((300 * kelvin) * (9 / 5)) - 459.67);
    return fahrenheit
};

const Temperature = ({ temp }) => (
    <p>{temp}*F</p>
);

export default Temperature;