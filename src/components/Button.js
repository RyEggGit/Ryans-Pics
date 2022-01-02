import react from "react";
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--add-to-bag']

const SIZES = ['btn--medium', 'btn--large', 'btn--small']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/explore' className='btn-mobile'>
            <button className={`btn ${checkButtonStyles} ${checkButtonSize}`} onClick={onClick} type = {type}>
                {children}
            </button>
        </Link>
    )
};

export default Button;