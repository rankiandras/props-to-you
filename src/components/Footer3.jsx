import React, { useState } from 'react'

function Footer3(props) {
    const [key1, setKey1] = useState('footer')
    return (
    <div className={key1} onClick={() => setKey1('invisible')}>{props.date}</div>
  )
}

export default Footer3