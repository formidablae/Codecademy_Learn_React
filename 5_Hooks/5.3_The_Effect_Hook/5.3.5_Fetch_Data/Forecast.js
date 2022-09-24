import React, { useState, useEffect } from "react";
import { get } from './mockBackend/fetch';

export default function Forecast() {
    const [data, setData] = useState();
    const [notes, setNotes] = useState({});
    const [forecastType, setForecastType] = useState('/daily');

    useEffect(() => {
        alert('Requested data from server...');
        get(forecastType).then((response) => {
            alert('Response: ' + JSON.stringify(response, '', 2));
            setData(response.data)
        });
    }, [forecastType]);

    const handleChange = (index) => ({ target }) => setNotes((prev) => ({
        ...prev,
        [index]: target.value
    }));


    // Just before the existing JSX, use an if block to check if data is falsey.

    // If it is, return the loading paragraph like so:

    // if (!data) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div className='App'>
            <div>
                <button onClick={() => setForecastType('/daily')}>5-day</button>
                <button onClick={() => setForecastType('/hourly')}>Today</button>
            </div>
            <h1>My Weather Planner</h1>
            {!data && <p>Loading...</p>}
            {
                data &&  <table>
                    <thead>
                        <tr>
                            <th>Summary</th>
                            <th>Avg Temp</th>
                            <th>Precip</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={item.id}>
                                <td>{item.summary}</td>
                                <td> {item.temp.avg}°F</td>
                                <td>{item.precip}%</td>
                                <td>
                                    <input
                                        value={notes[item.id] || ''}
                                        onChange={handleChange(item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}
