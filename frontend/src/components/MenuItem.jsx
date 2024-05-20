import React from "react"

const menuItemTitleStyle = {
    'font-family': 'Tahoma',
    // 'font-size': '1.1rem',
    'font-weight': '900',
    'color': "#CC3233"
}

const menuItemDescriptionStyle = {
    'font-family': 'Tahoma',
    // 'font-size': '1rem',
    'font-weight': '900',
    'color': '#038540'
}

export default props => (
    <div className="mb-10">
        <div className="flex justify-between mx-12">
            <h2 className="text-sm md:text-lg" style={menuItemTitleStyle}>{props.name}</h2>
            <h2 className="text-sm md:text-lg" style={menuItemTitleStyle}>{props.price}</h2>
        </div>
        <h2 className="text-xs md:text-base mx-12" style={menuItemDescriptionStyle}>{props.description}</h2>
    </div>
);