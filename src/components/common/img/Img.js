import React from 'react'
import PropTypes from 'prop-types'
import {NO_IMAGE_URL} from './../../../constants/misc.js'

const Img = ({ src, fallbackSrc, alt, ...other }) => {
    let element;
    const changeSrc = newSrc => {
        element.src = newSrc;
    };
    return (
        <img src={src}
            onError={() => changeSrc(fallbackSrc || NO_IMAGE_URL)}
            ref={el => element = el}
            alt={alt}
            {...other} />
    );
};

Img.propTypes = {
    src: PropTypes.string,
    fallbackSrc: PropTypes.string,
    alt: PropTypes.string
};
export default Img;