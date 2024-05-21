import React from 'react'


const highlightdata = () => {
    Highlight( [

        { title: "UV Index", comment: "", payload: ["5"] },
        { title: "Wind Status", comment: "WSW", payload: ["7.70"] },
        { title: "Sunrise & Sunset", comment: "", payload: ["6:35", "5:42"] },
        { title: "Humidity", comment: "Normal", payload: ["12%"] },
        { title: "Visibility", comment: "Average", payload: ["5.2 KM"] },
        { title: "Air Quality", comment: "Unhealthy", payload: ["105"] }


    ]
)
}

    

const Highlight = () => {
    return (
        <>
           <div className="border-2 border-green-500 p-6 grow">


                    <div className="border-2 border-black px-0 py-0 h-full grid grid-cols-3 gap-16 grid-rows-2">


                        {Highlight.map((highlight) => (
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

            
        </>
    )
}

export default Highlight



