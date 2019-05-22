import React from 'react';

const Cockpit = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.click} >Toggle Names</button>
        </div>
    );
};

export default Cockpit;