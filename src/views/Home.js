import React, { Fragment, useState, useEffect } from 'react';

import Feedback from '../components/Feedback';
import List from '../components/List';
import Search from '../components/Search';

const OLO_API_ENDPOINT =
    'https://ordering-ow3.oloqa.com/v1.1/restaurants/near?radius=25&limit=25&key=x9SZvZAsXYMQRrNmtvXz4hoqNiOj7p0R&zip=';

const sortStores = (stores = []) => [
    ...stores.sort(
        ({ distance: distanceA }, { distance: distanceB }) =>
            distanceB + distanceA
    )
];

export default () => {
    const [zip, setZip] = useState('97124');
    const [nearestStores, setNearestStores] = useState([]);
    const [userFeedback, setUserFeedback] = useState({
        color: 'none',
        message: ''
    });

    async function updateStores(updatedZip) {
        try {
            setZip(updatedZip);
            if (updatedZip.length !== 5) {
                setUserFeedback({
                    color: 'orange',
                    message: 'Please enter 5 digits for the ZIP code.'
                });
                return;
            }

            setUserFeedback({ color: 'blue', message: 'Loading...' });
            const response = await fetch(`${OLO_API_ENDPOINT}${updatedZip}`);
            const data = await response.json();

            if (data.code) {
                setUserFeedback({
                    color: 'red',
                    message: `Oops! ${data.message}`
                });
                return;
            }

            const { restaurants: stores } = data;
            const sortedStores = sortStores(stores);
            setNearestStores(sortedStores);
            setUserFeedback({ color: 'none', message: '' });
        } catch (error) {
            setUserFeedback({
                color: 'red',
                message: `Oops! ${error.message}`
            });
        }
    }

    useEffect(() => {
        updateStores(zip);
    }, []);

    return (
        <Fragment>
            <h1>Find the nearest Five Guys</h1>
            <Search zip={zip} updateStores={updateStores} />
            <Feedback userFeedback={userFeedback} />
            <List listOfStores={nearestStores} />
        </Fragment>
    );
};
