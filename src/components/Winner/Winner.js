import React from 'react';
function Winner(props) {
return (
        <div className="winner-overlay">
            <h2 className="winner-overlay__title">The winner is {props.winner}</h2>
        </div>
    );
}

export default Winner;