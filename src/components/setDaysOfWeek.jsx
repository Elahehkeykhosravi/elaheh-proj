import { useState, useEffect } from 'react'
import  myData  from './timelines.json'

let hour = 0
let  min = +100
let max = -100
let sum = 0
while (hour < 24) {
    console.log("Hour [" + hour + "]: Time: " + myData.data.timelines[0].intervals[hour].startTime + "   |   Value: " + myData.data.timelines[0].intervals[hour].values.temperature + " | Value: " + myData.data.timelines[0].intervals[hour].values.weatherCode);
    let temperature = myData.data.timelines[0].intervals[hour].values.temperature
    if(temperature < min){
        min = temperature
        };
        if(temperature > max){
            max = temperature
        };
        sum += temperature
        hour = hour + 1
};
console.log("Minimum temperature: " + min);
console.log("Maximum temperature: " + max);
console.log("Sum of temperature: " + sum);
console.log("Average temperature: " + (sum/24));











export function SetDaysOfWeek() {

    const [weatherData, setWeatherData] = useState();
    const [Loading, setLoading] = useState(true)
    //const [ minTemperture, setMintemperture ] = useState ();
    //const [maxTemperture , setMaxtemperture ] = useState ();

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT');
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);

            };

        };

        fetchWeatherData();
    }, []);
    {/*if ( Loading ) {
        return <div>Loading....</div>
    };*/}




    


    return (
        <div className='flex'>
     {/*weatherData.setWeatherData.myData.data.timelines[0].intervals .map((intervals, index)  (

                <div className={`rounded-lg h-48 flex-auto bg-white shadow-lg space-x-8`}>
                    <div className=" text-bold text-black text-lg h-[25%]  p-2 flex justify-center">{intervals.startTime}</div>
                    <div className=" h-[50%]">Text</div>
                    <div className=" flex flex-row h-[25%] p-2 justify-center space-x-2 ">
                        <p className='text-lg text-black text-semibold'>{intervals.temperature}°</p>
                        <p className=" text-lg text-gray-300 text-semibold">{intervals.temperature}°</p>
                    </div>
                </div>
            ))*/} 

        </div>
    )

}




















export default SetDaysOfWeek