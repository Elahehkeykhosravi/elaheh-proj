import React, { useState, useEffect } from 'react';
import myDataImported from './timelines.json'

export function weather (){

const [myWeek, setMyWeek] = useState(
    [
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 }
    ]
);



const decodeMyData = (myData) => {
    let myWeekLocal = [
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 },
        { min: 0, max: 0, avg: 0 }
    ];
    let day = 0
    while (day < 5) {
        let hour = day * 24
        let min = +100
        let max = -100
        let sum = 0
        while (hour < (day * 24 + 24)) {
            // console.log("Hour [" + hour + "]: Time: " + myData.data.timelines[0].intervals[hour].startTime + 
            //     "   | Value: " + myData.data.timelines[0].intervals[hour].values.temperature + 
            //     "   | Value: " + myData.data.timelines[0].intervals[hour].values.weatherCode);
            let temperature = myData.data.timelines[0].intervals[hour].values.temperature
            if (temperature < min) {
                min = temperature
            }
            if (temperature > max) {
                max = temperature
            }
            sum += temperature
            hour = hour + 1
        }
        console.log("Day [" + day + "]: MIN: [" + min + "] MAX:[" + max + "] AVG:[ " + (sum / 24) + "]");

        myWeekLocal[day].avg = (sum / 24);
        myWeekLocal[day].max = max;
        myWeekLocal[day].min = min;

        day = day + 1;
    }
    console.log("Local: ");
    console.log(myWeekLocal);
    console.log("-----------------------------------------------------");

    setMyWeek(myWeekLocal);
    console.log(myWeek);



};






const [weatherData, setWeatherData] = useState();
const [Loading, setLoading] = useState(true)

useEffect(() => {
    const fetchWeatherData = async () => {
        try {
            const response = await fetch('https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT');
            console.log(response);
            const data = await response.json();
            console.log(data);
            decodeMyData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        } finally {
            setLoading(false);

        };

    };

    fetchWeatherData();
}, []);
{
    if (Loading) {
        return <div>Loading....</div>
    };
}
}
export default weather