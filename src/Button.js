import React from 'react';
import "./App.css";

function Button({ title, type="marriage" }) {
    const onClick = () => {
        if(type === "marriage") {
            window.location.href="https://goo.gl/maps/sNTYLNvjxHbLMP7H6"
        } else {
            window.location.href="https://goo.gl/maps/P9xnAZyEKKwcAKBQ6"
        }
    }

    return (
        <button onClick={onClick}  className="button">
            {title}
        </button>
    );
}
export default Button;