import React from 'react';
import "./App.css";

function Button({ title, type="marriage" }) {
    const onClick = () => {
        if(type === "marriage") {
            window.location.href="https://goo.gl/maps/jqWdszpWng6cwWNRA"
        } else {
            window.location.href="https://goo.gl/maps/TVab58hRETZoty6s7"
        }
    }

    return (
        <button onClick={onClick}  className="button">
            {title}
        </button>
    );
}
export default Button;