import React from "react"

import styled from 'styled-components';

const MapsDiv = styled.div`
    height: '100%';
    width: '100%';
    maxWidth: '100%';

    width: 400px;
    height: 200px;
    overflow: hidden;

    @media (min-width: 768px) {
    width: 800px;
    height: 300px;
    }
`;

const ContactPage = ({style}) => {
    return (
        <div className="flex flex-col justify-center items-center pb-52 md:pb-24 space-y-2" style={style}>
            <h1 className="w-fit text-lg md:text-2xl" style={{color: '#FFCC33'}}>617-232-7070</h1>
            <h1 className="w-fit text-lg md:text-2xl">Call us to place an order for pickup</h1>
            <h1 className="w-fit text-lg md:text-2xl pt-5 md:pt-20">1 Centre Street, Brookline, MA 02446</h1>
            <div className="pt-4" style={{ overflow: 'hidden', maxWidth: '100%', }}>
                <MapsDiv id="embed-map-display">
                    <iframe
                    style={{ height: '100%', width: '100%', border: 0 }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=1+Centre+Street,+Brookline,+MA+02446&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    allowFullScreen
                    ></iframe>
                </MapsDiv>
                <a className="googlecoder" rel="nofollow" href="https://kbj9qpmy.com/hrn" id="grab-map-data">
                </a>
                <style>{`
                    #embed-map-display img {
                        max-width: none !important;
                        background: none !important;
                        font-size: inherit;
                        font-weight: inherit;
                    }
                `}</style>
            </div>
        </div>
    );
}
  
export default ContactPage;