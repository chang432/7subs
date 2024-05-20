import React from "react"

import Location from '../assets/googlemaps.png'

const ContactPage = ({style}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen pb-24 space-y-2" style={style}>
            <h1 className="w-fit text-lg md:text-2xl">617-232-7070</h1>
            <h1 className="w-fit text-lg md:text-2xl">Call us to place an order for pickup</h1>
            <h1 className="w-fit text-lg md:text-2xl pt-20">1 Centre Street, Brookline, MA 02446</h1>
            <img src={Location} className="w-3/4"/>
        </div>
    );
}
  
export default ContactPage;