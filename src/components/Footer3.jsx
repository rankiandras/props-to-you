import React, { useState, useEffect } from 'react'


function Footer3(props) {
  
  let [key1, setKey1] = useState('footer')
  const hidden = () => setKey1('footer__hidden')
  
 
  useEffect(
    () => {
      setTimeout(() => {}, 2000);
      
    }, [key1])
  
  return (
    <div className={key1} onClick={hidden}>{props.date}</div>
    )
  }
  
export default Footer3