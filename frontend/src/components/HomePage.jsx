import React from "react"

const titleStyle = {
    'font-family': 'Joti One',
    'font-size': '4.5rem',
    'font-weight': '400',
    'color': 'white'
}

const subTitleStyle = {
    // 'font-family': 'Joti One',
    'font-size': '1.5rem',
    'font-weight': '400',
}

const HomePage = ({style}) => {
    return (
        <div className="flex justify-center items-center h-screen space-x-24 pb-48" style={style}>
            <img src="./src/assets/storefront.png" style={{'height': '30rem'}}/>
            <div className="flex flex-col items-center">
                <h1 className="w-fit" style={{...titleStyle}}>WE'RE BACK!</h1>
                <h1 className="w-fit" style={subTitleStyle}>OPEN LONGER HOURS</h1>
                <h1 className="w-fit" style={subTitleStyle}>NOW 8PM WEEKNIGHTS</h1>
                <div className="w-fit flex flex-row pt-12">
                    <h1 className="pr-2">Order Today:</h1>
                    <h1 style={{'color': '#FFCC33'}}>617-232-7070</h1>
                </div>
            </div>
        </div>
    );
}
  
export default HomePage;