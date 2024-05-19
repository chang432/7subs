import React from "react"

import StoreFront from '../assets/storefront.png';

const titleStyle = {
    'font-family': 'Joti One',
    // 'font-size': '4.3rem',
    'font-weight': '400',
    'color': 'white'
}

const subTitleStyle = {
    // 'font-size': '1.5rem',
    'font-weight': '400',
}

const HomePage = ({style}) => {
    return (
        <div className="flex flex-wrap-reverse justify-center items-center h-screen pb-36" style={style}>
            <img className="flex-shrink min-w-0 w-1/2" src={StoreFront}/>
            <div className="flex flex-col items-center flex-shrink min-w-0 px-10">
                <h1 className="text-3xl lg:text-7xl sm:text-5xl" style={{...titleStyle}}>WE'RE BACK!</h1>
                <h1 className="lg:text-2xl sm:text-sm mt-10" style={subTitleStyle}>OPEN LONGER HOURS</h1>
                <h1 className="lg:text-2xl sm:text-sm" style={subTitleStyle}>NOW 8PM WEEKNIGHTS</h1>
                <div className="flex pt-12">
                    <h1 className="pr-2 min-w-0 flex-shrink">Order Today:</h1>
                    <h1 className="min-w-0 flex-shrink" style={{color: '#FFCC33'}}>617-232-7070</h1>
                </div>
            </div>
        </div>
    );
}
  
export default HomePage;