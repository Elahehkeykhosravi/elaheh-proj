import React, { useState } from 'react'





const Mainpage = () => {

    // let daysOfTheWeek = [];

    const [daysOfTheWeek, setDaysOfWeekNow] = useState([]);
    const [highlights, setHilightsNow] = useState( [
        { title: "UV Index", comment: "", payload: ["5"] },
        { title: "Wind Status", comment: "WSW", payload: ["7.70"] },
        { title: "Sunrise & Sunset", comment: "", payload: ["6:35", "5:42"] },
        { title: "Humidity", comment: "Normal", payload: ["12%"] },
        { title: "Visibility", comment: "Average", payload: ["5.2 KM"] },
        { title: "Air Quality", comment: "Unhealthy", payload: ["105"] },
    ]  );


    

    const eraseDaysOfWeek = () => {
        setDaysOfWeekNow([])
    }

    const setDaysOfWeek = () => {
        setDaysOfWeekNow(
            [
                { day: "Sun", LowT: 12, HighT: 15, Text: 'test1' },
                { day: "Mon", LowT: 11, HighT: 14, Text: 'test1' },
                { day: "Tue", LowT: 9, HighT: 16, Text: 'test1' },
                { day: "Wed", LowT: 5, HighT: 10, Text: 'test1' },
                { day: "Thu", LowT: 8, HighT: 17, Text: 'test1' },
                { day: "Fri", LowT: 3, HighT: 11, Text: 'test1' },
                { day: "Sat", LowT: 1, HighT: 5, Text: 'test1' }

            ]
        )
    }



    return (
        <>
            <div className="relative border-2 border-yellow-500 h-full grow bg-gray-100 flex flex-col">

                <div className=" p-6 w-full min-h-min">

                    <div className=" min-h-min w-full flex flex-row space-x-4 justify-between ">
                        <div className=" flex flex-row space-x-4 ">
                            <p className="text-base text-gray-400 font-semibold no-underline hover:text-black hover:underline ">Today</p>
                            <p className="text-base text-gray-400 font-semibold no-underline hover:text-black hover:underline ">Week</p>
                        </div>
                        <div className=" flex flex-row space-x-4">
                            <div className="relative w-8 h-8 rounded-full bg-white mb-4  text-s text-black font-semibold hover:text-white hover:bg-black pl-1 pt-0.5">
                                °C
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white mb-4  text-s text-black font-semibold hover:text-white hover:bg-black pl-1 pt-0.5">
                                °F
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3 justify-between  ">

                        {daysOfTheWeek.map((eachDayOfTheWeek) => (

                            <div className={`rounded-lg h-48 flex-auto bg-white shadow-lg`}>
                                <div className=" text-bold text-black text-lg h-[25%]  p-2 flex justify-center">{eachDayOfTheWeek.day}</div>
                                <div className=" h-[50%]">{eachDayOfTheWeek.Text}</div>
                                <div className=" flex flex-row h-[25%] p-2 justify-center space-x-2 ">
                                    <p className='text-lg text-black text-semibold'>{eachDayOfTheWeek.HighT}°</p>
                                    <p className=" text-lg text-gray-300 text-semibold">{eachDayOfTheWeek.LowT}°</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="border-2 border-green-500 p-6 grow">
                    <button className="bg-black text-white font-bold m-1 p-1" onClick={eraseDaysOfWeek}>test</button>
                    <button className="bg-black text-white font-bold m-1 p-1" onClick={setDaysOfWeek}>test2</button>

                    <div className="border-2 border-black px-0 py-0 h-full grid grid-cols-3 gap-16 grid-rows-2">


                        {highlights.map((highlight) => (
                            <div className="border-2 border-red-500 rounded-lg bg-white shadow-lg p-4 relative flex flex-col">
                                <p className="border-b-2 border-blue-500 text-lg text-gray-400 text-semibold flex-none">{highlight.title}</p>
                                {highlight.payload.map((data) => (
                                    <p className='text-3xl tracking-tight leading-tight flex-grow'>{data}</p>
                                ))}
                                <p className='border-t-2 border-blue-500 text-lg text-black text-bold flex-grow' >{highlight.comment}</p>

                            </div>

                        )
                        )}
                    </div>










                </div>
            </div>

        </>
    )

}

export default Mainpage










