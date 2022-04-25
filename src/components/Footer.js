import React, { useState } from 'react';

/* import React, { Component } from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className1: 'footer',
            className2: 'hiddenFooter'
        }
    }

    render() {
        return (
            <div>
                <span>Current date is: {props.date}</span>
            </div>
        )
    }
}

 */





function Footer(props) {
/* 
    let content =
    <div className={props.className1}>
        <span>Current date is: {props.date}</span>
    </div>;

    return content
 */
    
    const [count, setCount] = useState('footer');
    
    return (
        <div className={count} onClick={() => setCount('footer__hidden')} >
            <span>Current date is: {props.date}</span>
        </div>

    )
}

export default Footer