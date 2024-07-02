import { useState, useEffect } from 'react'

import { weather } from './Weather';


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let myWeekDay = [];

let myLoopDay = 0;
while (myLoopDay < 5) {
    const day2 = new Date();
    day2.setDate(day2.getDate() + myLoopDay);
    myWeekDay[myLoopDay] = weekday[day2.getDay()];
    console.log(myWeekDay[myLoopDay]);
    myLoopDay++;
};








export function SetDaysOfWeek() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
 






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