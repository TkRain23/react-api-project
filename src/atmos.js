import React from 'react';


const Atmosphere = ({ pressure, humidity }) => (
    <div class="astmosphere">
        <h3>{pressure}</h3>
        <p>{humidity}</p>
    </div>
);

export default Atmosphere;