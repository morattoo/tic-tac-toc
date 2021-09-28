import React from 'react';
import './Square.css';

function Square(props) {
  const playerX = () => {
    return <svg className="x" width="85" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#989898" strokeLinecap="round" d="m10.991 8.612 62.858 73.634M76.237 18.778 7.778 87.237"/>
    </svg>;
  }
  
  const playerO = ()=> {
    return <svg  className="o" width="77" height="84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" d="M37.675 75.806c-8.727.558-15.488-2.88-20.385-8.743-5.022-6.013-8.171-14.74-8.793-24.464-.62-9.712 1.421-18.19 5.57-24.232 4.038-5.885 10.316-9.85 19.27-10.423 18.189-1.162 33.876 12.64 35.038 30.828 1.186 18.553-12.864 35.894-30.7 37.034Z" stroke="#000"/>
    </svg>
  }
  return (
    <button className="square" onClick={props.onClick}>
      {props.value === 'O' &&  playerO()}
      {props.value === 'X' &&  playerX()}
    </button>
  );
}

export default Square;
