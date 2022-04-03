import React from 'react';

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h2>My PortFolio</h2>
      <hr style={{ width: '200px' }} />
      <div className='portfolio-Box'>
        <div className='portfolio-item'>
          <a href='https://ph1eashan.github.io/todoApp-Js/'>
            <img
              src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy-projects/Todo_App_JS.png'
              alt=''
            />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://ph1eashan.github.io/Clock-Js/'>
            <img
              src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy-projects/digital-clock_masthead.png'
              alt=''
            />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://p1reactblogapp.netlify.app'>
            <img src='https://i.ibb.co/XZvC1Mv/Screenshot-45.png' alt='' />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://ph1eashan.github.io/Fonakart/'>
            <img src='https://i.ibb.co/Bnxy3gS/Screenshot-46.png' alt='' />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://ph1eashan.github.io/Dicee-Challenge/'>
            <img src='https://i.ibb.co/pb6VnVD/Screenshot-47.png' alt='' />
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://ph1eashan.github.io/Drum-Kit/'>
            <img src='https://i.ibb.co/smcvSzV/Screenshot-48.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
