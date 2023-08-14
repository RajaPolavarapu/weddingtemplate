import React from 'react';
import "./App.css"
function Button() {
    return (
        <div className="container">
            <a href="#" className="button">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">Directions</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </a>
        </div>
    );
}
export default Button;