import {useState} from 'react';

function ToDo(props) {
    useState();
    
    function deleteHandler() {
        console.log('clicked');
        console.log(props.text);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Deletes</button>
            </div>
        </div>
    )
}

export default ToDo;