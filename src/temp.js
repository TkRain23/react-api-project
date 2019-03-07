import React from 'react';


//  Converts the given temp 'kelvintemp' to farenheit using forumula: 300K × 9/5 - 459.67
export const c2F = (kelvintemp) => {
    console.log("kelvintemp:", kelvintemp);
    
    const fahrenheit = ( ((300 * kelvintemp) * (9 / 5)) - 459.67 );
    return fahrenheit;
};

const Temperature = ({ temp }) => (
    <p>{temp}°F</p>
);

export default Temperature;