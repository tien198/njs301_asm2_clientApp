import React, { useState } from "react";

/**
 * Display an image center inside an overflow: hidden div
 * @param {string} imgUrl 
 * @param {string} imgAlt
 * @param {string} className - Use to set width of displayed img
 */
function Imgcard({ imgUrl, imgAlt, ...props }) {
    const [imgHeight, setImgHeight] = useState('0px');

    const onSetImgHeight = e => {
        setImgHeight(e.currentTarget.offsetWidth + 'px')
    };

    return (
        <div className={`overflow-hidden relative w-full`} {...props} style={{ height: imgHeight }} >
            <img src={imgUrl} alt={imgAlt} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-max w-max' onLoad={onSetImgHeight} />
        </div>
    );
}

export default Imgcard;