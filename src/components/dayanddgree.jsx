import React from 'react'

export function DayAndDgree() {




    return (


        <>



            

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
                  
                </div>


            
           


        </>
    )


}
export default DayAndDgree












































