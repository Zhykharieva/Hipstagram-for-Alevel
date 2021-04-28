import React from 'react';
import './style.css'

const Button = ({
   btnId,
    onClick,
    children,
    className

})=> {
    return <button
    name={btnId} className={className}
               onClick={(e) => onClick && onClick(e)}>
                   {children}
            </button>
   
}

export default Button;