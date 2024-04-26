import React from 'react'

const Mainpage = () => {
    return (
        <>
            <div className="border-2 border-yellow-500 h-full grow">
                <div className="border-2 border-red-500 h-[40%] w-full">

                    <div className=" min-h-min w-full p-4 flex flex-row space-x-4 justify-between ">
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
                    <div className="border-2 border-red-500 rounded-lg h-36 w-8 m-4"></div>



                </div>
            </div>
        </>
    )
}

export default Mainpage