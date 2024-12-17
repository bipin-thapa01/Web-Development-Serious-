import React, {useState} from 'react';
import './Color.css'

export default function Color(){

  let [color, setColor] = useState('#000000');

  let handelColorChange = (event) =>{
    setColor(event.target.value);
    let value = event.target.value.slice(1);
  }

  return (
    <>
      <div className="parent">
      <div className='text'>The color is {color}</div>
      <div className='color-box' style={{backgroundColor: color}}></div>
      <input type="color" value={color} onChange={handelColorChange}/>
      </div>
    </>
  );
}