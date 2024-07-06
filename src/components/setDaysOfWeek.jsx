//import { useState, useEffect } from 'react'


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let myWeekDay = [];

let myLoopDay = 0;
while (myLoopDay < 5) {
    const day2 = new Date();
    day2.setDate(day2.getDate() + myLoopDay);
    myWeekDay[myLoopDay] = weekday[day2.getDay()];
    //console.log(myWeekDay[myLoopDay]);
    myLoopDay++;
};








export function SetDaysOfWeek() {
    // const [myWeek, setMyWeek] = useState(
    //     [
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 }
    //     ]
    // );
    
    
    
    // const decodeMyData = (myData) => {
    //     let myWeekLocal = [
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 },
    //         { min: 0, max: 0, avg: 0 }
    //     ];
    //     let day = 0
    //     while (day < 5) {
    //         let hour = day * 24
    //         let min = +100
    //         let max = -100
    //         let sum = 0
    //         while (hour < (day * 24 + 24)) {
    //             // console.log("Hour [" + hour + "]: Time: " + myData.data.timelines[0].intervals[hour].startTime + 
    //             //     "   | Value: " + myData.data.timelines[0].intervals[hour].values.temperature + 
    //             //     "   | Value: " + myData.data.timelines[0].intervals[hour].values.weatherCode);
    //             let temperature = myData.data.timelines[0].intervals[hour].values.temperature
    //             if (temperature < min) {
    //                 min = temperature
    //             }
    //             if (temperature > max) {
    //                 max = temperature
    //             }
    //             sum += temperature
    //             hour = hour + 1
    //         }
    //         console.log("Day [" + day + "]: MIN: [" + min + "] MAX:[" + max + "] AVG:[ " + (sum / 24) + "]");
    
    //         myWeekLocal[day].avg = (sum / 24);
    //         myWeekLocal[day].max = max;
    //         myWeekLocal[day].min = min;
    
    //         day = day + 1;
    //     }
    //     console.log("Local: ");
    //     console.log(myWeekLocal);
    //     console.log("-----------------------------------------------------");
    
    //     setMyWeek(myWeekLocal);
    //     console.log(myWeek);
    
    
    
    // };
    
    
    
    
    
    
    // const [weatherData, setWeatherData] = useState();
    // const [Loading, setLoading] = useState(true)
    
    // useEffect(() => {
    //     const fetchWeatherData = async () => {
    //         try {
    //             const response = await fetch('https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT');
    //             console.log(response);
    //             const data = await response.json();
    //             console.log(data);
    //             decodeMyData(data);
    //         } catch (error) {
    //             console.error('Error fetching weather data:', error);
    //         } finally {
    //             setLoading(false);
    
    //         };
    
    //     };
    
    //     fetchWeatherData();
    // }, []);
    // {
    //     if (Loading) {
    //         return <div>Loading....</div>
    //     };
    // }






    return (
        <div className='flex'>

            {myWeek.map((day, index) => (
                <div className={`rounded-lg h-48 flex-auto bg-white shadow-lg space-x-8`} key={index}>
                    <div className=" text-bold text-black text-lg h-[25%]  p-2 flex justify-center">{myWeekDay[index]}</div>
                    <div className=" h-[50%]">Text</div>
                    <div className=" flex flex-row h-[25%] p-2 justify-center space-x-2 ">
                        <p className='text-lg text-black text-semibold'>{Math.trunc(day.min)}°</p>
                        <p className=" text-lg text-gray-300 text-semibold">{Math.trunc(day.max)}°</p>
                    </div>
                </div>
            ))}

        </div>
    )

}






























export default SetDaysOfWeek