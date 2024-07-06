import React from 'react'
import Logo from '../images/logo.png'
import { WiCloudy } from 'react-icons/wi'
import { WiRainMix } from "react-icons/wi";
//import { useTimezoneSelect, allTimezones } from "react-timezone-select"
import { CiSearch } from "react-icons/ci";
//import myDataImported from './timelines.json'
import { useState, useEffect } from 'react'
import { data } from 'autoprefixer';
// import { data } from 'autoprefixer';
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
//console.log(day)


export function Sidebar() {

//     const decodeMyData = (myDataImported) => {
//         let myWeekLocal = [
//             { temperature: 0 }
//         ];
            
           
//             console.log(myWeekLocal)


//     let today = myDataImported.data.timelines[0].intervals[0].values.temperature
//     console.log(today)
// }


     



//         const [weatherData, setWeatherData] = useState();
//         const [Loading, setLoading] = useState(true)

//         useEffect(() => {
//             const fetchWeatherData = async () => {
//                 try {
//                     const response = await fetch('https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT');
//                     console.log(response);
//                     const today = await response.json();
//                     console.log(today);
//                     decodeMyData(today);
//                 } catch (error) {
//                     console.error('Error fetching weather data:', error);
//                 } finally {
//                     setLoading(false);

//                 };

//             };

//             fetchWeatherData();
//         }, []);
//         {
//             if (Loading) {
//                 return <div>Loading....</div>
//             };
//         }












        return (
            <>

                <div className="h-screen flex-none w-96 bg-white">

                    <div className="h-[10%] ">
                        <div className="relative top-1/4  flex justify-center ">

                            <div className="pl-3 py-1 w-3/4 bg-white text-black rounded-md shadow-lg  ">
                                <CiSearch className='inline text-lg mb-1' /> <input type="text" placeholder="search for places..." />
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[70%] flex flex-col space-y-4 px-4">
                        <div className="w-full h-full bg-contain bg-no-repeat bg-center mx-auto" style={{ backgroundImage: `url(${Logo})` }}></div>


                        <div className="flex ">
                            <p className=" text-8xl tracking-tight leading-tight ">{}</p>
                            <p className=" text-4xl tracking-tight leading-tight pt-4">°C</p>
                        </div>


                        <div className="text-2xl text-black font-bold flex flex-row ">{day},<h1 className="text-xl font-bold text-gray-300 mt-auto"> 15:33</h1>

                        </div>

                    </div>
                    <div className=" h-[20%] p-4 space-y-2 ">
                        <h1 className="text-black font-semibold  "> <WiCloudy className='inline text-lg mb-1' />Mostly cloudy</h1>
                        <h2 className="text-black font-semibold  "> <WiRainMix className='inline text-lg mb-1' />Rain-30%</h2>
                    </div>

                </div>
            </>
        )
    

}

export default Sidebar