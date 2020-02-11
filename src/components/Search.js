import React from 'react';

export default ({ zip, updateStores }) => (
    <div>
        <label htmlFor="search">ZIP:</label>{' '}
        <input
            id="search"
            value={zip}
            onChange={event => updateStores(event.target.value)}
        />
    </div>
);
