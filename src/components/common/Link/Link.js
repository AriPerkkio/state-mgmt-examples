import React from 'react';

const Link = ({ children, ...props }) => (
    <a {...props} className='link' target='_blank' rel='noopener noreferrer'>
        {children}
    </a>
);

export default Link;
