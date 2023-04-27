import React from 'react';
import './Ilustration.css';
import lorem from './lorem-ipsum.jpg'

function Ilustration(props){
  return (
    <div className='ilustration'>
      <img id={`${props.about}-ilustration`} src={lorem} alt={props.about}/>
    </div>
  );
};

export default Ilustration;