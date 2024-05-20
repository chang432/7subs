import React from "react"

const HoursPage = ({style}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen pb-48 space-y-2" style={style}>
            <h1 className="w-fit text-lg md:text-2xl">Hours:</h1>
            <h1 className="w-fit text-lg md:text-2xl">MON - FRI: 11am to 6pm</h1>
            <h1 className="w-fit text-lg md:text-2xl">SATURDAY: 11am to 4pm</h1>
            <h1 className="w-fit text-lg md:text-2xl">SUN: CLOSED</h1>
        </div>
    );
}
  
export default HoursPage;