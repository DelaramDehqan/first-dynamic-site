import React from 'react';
import './Home.css';
import  coding  from './Coding.png';

export const Home = () => {
  return (
    <div className='containerHome'>
      <div className='left'>
        <h1>React js</h1>
        <h3>Maktabsharif.ir</h3>
        <h4 className='h4'><span>(ReactJS)</span>زبـان برنـامه نویــسی ری اکت</h4>
      </div>
      <div className='right'>
        <img src={ coding } />
      </div>
    </div>
  )
}

