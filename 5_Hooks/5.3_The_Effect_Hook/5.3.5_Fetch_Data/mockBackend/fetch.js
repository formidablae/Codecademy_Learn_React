// You don't need to look at this, but you can if you want!

// This module exports fake data fetching functionality.
// In a real app, this would grab data from the internet, but
// this module just waits a little bit before responding.

import DATA from "./data";

export function get(endpoint) {
    const delay = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!DATA.hasOwnProperty(endpoint)) {
                const validEndpoints = Object.keys(DATA)
                    .map((endpoint) => ` - "${endpoint}"`)
                    .join("\n ");
                reject(
                    `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
                );
            }

            const response = { status: 200, data: DATA[endpoint] };

            resolve(response);
        }, delay);
    });
}
