import flowers from './data';
import React from 'react';
import ReactDOM from 'react-dom';

function Images(props) {
    return (
        <div>
            <img src={props.picture} /> <br /> {props.name}
        </div>
    );
}
export default Images;