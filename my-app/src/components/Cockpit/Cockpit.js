import React, { useEffect } from 'react';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP request...
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.clicked} >Get names back</button>
            <button onClick={props.click} >Toggle Names</button>
        </div>
    );
};

export default Cockpit;