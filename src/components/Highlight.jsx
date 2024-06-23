import React from 'react'








export function Highlight ()  {
    const highlightData = [
        { title: "UV Index", comment: "", payload: ["5"] },
        { title: "Wind Status", comment: "WSW", payload: ["7.70"] },
        { title: "Sunrise & Sunset", comment: "", payload: ["6:35", "5:42"] },
        { title: "Humidity", comment: "Normal", payload: ["12%"] },
        { title: "Visibility", comment: "Average", payload: ["5.2 KM"] },
        { title: "Air Quality", comment: "Unhealthy", payload: ["105"] }
    ]






    


    return (
        <>
           <div className=" p-6 grow">


                    <div className=" px-0 py-0 h-full grid grid-cols-3 gap-16 grid-rows-2">


                        {highlightData.map((highlight, index) => (
                            <div className=" rounded-lg bg-white shadow-lg p-4 relative flex flex-col" key={index}>
                                <p className=" text-lg text-gray-400 text-semibold flex-none">{highlight.title}</p>
                                {highlight.payload.map((data, index) => (
                                    <p key={index} className='text-3xl tracking-tight leading-tight flex-grow'>{data}</p>
                                ))}
                                <p className=' text-lg text-black text-bold flex-grow' >{highlight.comment}</p>

                            </div>

                        )
                        )} 
                    </div>
                </div>

            
        </>
    )


}
    export default Highlight



