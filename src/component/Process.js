import React from 'react';

function Process(props) {
    return (
        <div id={props.id} >
            <h2 className='text-md-center py-2'>{props.title}</h2>
            <div style={{ height: '100vh'}}></div>
            
        </div>
    );
}

export default Process;