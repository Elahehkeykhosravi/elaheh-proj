
import { Sidebar } from "../components/Sidebar"
import { DayAndDgree } from "../components/dayanddgree"
import { SetDaysOfWeek } from "../components/setDaysOfWeek"
import { Highlight } from "../components/Highlight"
import myDataImported from './timelines.json'
import { useState, useEffect } from 'react'
import { data } from "autoprefixer"



export const Mainpage = () => {
  const [myWeek, setMyWeek] = useState(
    [
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 }
    ]
  );

  const [mySideBarData, setMySideBarData] = useState(
    [
      {time: 0, temp: 0}
    ]
  ); 

  const decodeMyData = (myData) => {
    let mySideBarDataLocal = [
      {time: 0, temp: 0}
    ]
    let myWeekLocal = [
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 },
      { min: 0, max: 0, avg: 0 }
    ];

   mySideBarDataLocal.time = myData.data.timelines[0].intervals[0].startTime
   mySideBarDataLocal.temp = myData.data.timelines[0].intervals[0].values.temperature




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
     //console.log("Day [" + day + "]: MIN: [" + min + "] MAX:[" + max + "] AVG:[ " + (sum / 24) + "]");

     myWeekLocal[day].avg = (sum / 24);
     myWeekLocal[day].max = max;
     myWeekLocal[day].min = min;

     day = day + 1;
   }
   // console.log("Local: ");
   // console.log(myWeekLocal);
   // console.log("-----------------------------------------------------");

   setMyWeek(myWeekLocal);
   setMySideBarData(mySideBarDataLocal);
   //console.log(myWeek);


 };




  //console.log()
  // decodeMyData(data)




  const [weatherData, setWeatherData] = useState();
  const [Loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const response = await fetch('https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT');
  //       console.log(response);
  //       const data = await response.json();
  //       console.log(data);
  //       decodeMyData(data);
  //     } catch (error) {
  //       console.error('Error fetching weather data:', error);
  //     } finally {
  //       setLoading(false);
  //     };
  //   };
  //   fetchWeatherData();
  // }, []);

  useEffect(() => {
    decodeMyData(myDataImported);
     setLoading(false);
  }, []);



  if (Loading) {
    return <div>Loading....</div>
  };







// console.log(mySideBarData) 
    
  // console.log(myWeek);

  return (
    <>
      { <div className="flex">
        <Sidebar data={mySideBarData} />  
        <div className=" grow">
          <DayAndDgree />
          <SetDaysOfWeek headlines={myWeek}  />
          <Highlight />
        </div>
      </div> }

      


    </>
  )
}

export default Mainpage





