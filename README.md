🍔 Locate the closest Five Guys thanks to the Olo API.

Allows a user to search for a Five Guys location by zip code, displaying them in order of distance from the search location.

## API

Endpoint: https://ordering-ow3.oloqa.com/v1.1/restaurants/near?zip=90069&radius=25&limit=25&key=x9SZvZAsXYMQRrNmtvXz4hoqNiOj7p0R

Sample response:

```json
{
    "restaurants": [
        {
            "id": 1413,
            "distance": 0.03,
            "name": "Five Guys Brooklyn - Park Slope",
            "streetaddress": "284 7th Ave.",
            "city": "Brooklyn",
            "state": "NY",
            "zip": "11215",
            "telephone": "(555) 555-5555"
        }
    ]
}
```

## Dependencies

-   React Router
-   Styled Components
-   Babel
-   Prettier config

## Setup

    npm i

## Development

    npm start

Runs development server at `localhost:8080`.

Also outputs a build file for faster deployment to GitHub Pages.
