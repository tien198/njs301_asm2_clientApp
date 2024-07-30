import React, { useState } from "react";

/**
 * Display an image center inside an overflow: hidden div
 * @param {string} imgUrl 
 * @param {string} imgAlt
 * @param {string} className - Use to set width of displayed img
 */
function Imgcard({ imgUrl, imgAlt, ...props }) {
    const [imgHeight, setImgHeight] = useState('0px');
    let [isScale, setIsScale] = useState(false);

    const onSetImgHeight = e => {
        console.log(e.currentTarget);
        if (e.currentTarget.offsetWidth > 600)
            setIsScale(true);
        setImgHeight(e.currentTarget.parentElement.offsetWidth + 'px')
    };

    return (
        <div className={`overflow-hidden relative`} {...props} style={{ height: imgHeight }} >
            <img src={imgUrl} alt={imgAlt} className='absolute top-1/2 left-1/2 max-w-max max-h-max' onLoad={onSetImgHeight} style={{ transform: `translate(-50%, -50%) ${isScale ? 'scale(.35)' : 'scale(.6)'}` }} />
            {/* -translate-x-1/2 -translate-y-1/2 h-max w-max */}
        </div>
    );
}

export default Imgcard;