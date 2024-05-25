import React from "react"

import StoreFront from '../assets/storefront.png';

const titleStyle = {
    'font-family': 'Joti One',
    // 'font-size': '4.3rem',
    'font-weight': '400',
    'color': 'white'
}

const HomePage = ({style}) => {
    return (
        <div className="flex flex-wrap-reverse justify-center items-center" style={style}>
            <img className="flex-shrink min-w-72 w-1/2 mb-32 md:mb-0" src={StoreFront}/>
            <div className="flex flex-col items-center flex-shrink min-w-0 px-10">
                <h1 className="md:text-7xl text-5xl" style={{...titleStyle}}>WE'RE BACK!</h1>
                <h1 className="md:text-2xl text-base mt-4 md:mt-10">OPEN LONGER HOURS</h1>
                <h1 className="md:text-2xl text-base">NOW 8PM WEEKNIGHTS</h1>
                <div className="flex pt-6 md:pt-12">
                    <h1 className="pr-2 min-w-0 text-base md:text-lg">Order Today:</h1>
                    <h1 className="min-w-0 text-base md:text-lg" style={{color: '#FFCC33'}}>617-232-7070</h1>
                </div>
            </div>
        </div>
    );
}
  
export default HomePage;