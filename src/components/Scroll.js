import React from 'react';

const Scroll = (props) => {
    return(
        <div style={ { overflowY: 'scroll', height: '75vh', width: '100vw', borderRadius: '15px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;