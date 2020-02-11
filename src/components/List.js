import React from 'react';

export default ({ listOfStores }) => (
    <ul>
        {listOfStores.map(({ id, name, distance }) => (
            <li key={id}>
                {name} ({distance} miles)
            </li>
        ))}
    </ul>
);
