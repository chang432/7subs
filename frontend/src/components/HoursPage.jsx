import React from "react"

const textStyle = {
    'font-size': '1.3rem'
}

const HoursPage = ({style}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen pb-48 space-y-2" style={style}>
            <h1 className="w-fit" style={{...textStyle}}>Hours:</h1>
            <h1 className="w-fit" style={{...textStyle}}>MON - FRI: 11am to 6pm</h1>
            <h1 className="w-fit" style={{...textStyle}}>SATURDAY: 11am to 4pm</h1>
            <h1 className="w-fit" style={{...textStyle}}>SUN: CLOSED</h1>
        </div>
    );
}
  
export default HoursPage;