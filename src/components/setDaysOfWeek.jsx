import React from 'react'
const setDaysOfWeek = () => {


    setDaysOfWeek(
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
            {setDaysOfWeek.map((setDaysOfWeek) => (

                <div className={`rounded-lg h-48 flex-auto bg-white shadow-lg`}>
                    <div className=" text-bold text-black text-lg h-[25%]  p-2 flex justify-center">{setDaysOfWeek.day}</div>
                    <div className=" h-[50%]">{setDaysOfWeek.Text}</div>
                    <div className=" flex flex-row h-[25%] p-2 justify-center space-x-2 ">
                        <p className='text-lg text-black text-semibold'>{setDaysOfWeek.HighT}°</p>
                        <p className=" text-lg text-gray-300 text-semibold">{setDaysOfWeek.LowT}°</p>
                    </div>
                </div>
            ))}

        </>
    )


export default daysoftheweek