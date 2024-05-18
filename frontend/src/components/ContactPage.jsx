import React from "react"

const textStyle = {
    'font-size': '1.3rem'
}

const ContactPage = ({style}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen pb-24 space-y-2" style={style}>
            <h1 className="w-fit" style={{...textStyle}}>617-232-7070</h1>
            <h1 className="w-fit" style={{...textStyle}}>Call us to place an order for pickup</h1>
            <h1 className="w-fit pt-20" style={{...textStyle}}>1 Centre Street, Brookline, MA 02446</h1>
            <img src="./src/assets/googlemaps.png" className="w-3/4"/>
        </div>
    );
}
  
export default ContactPage;