import React from 'react';
import "./Home.css";
import Product from './Product';
import Header from './Header';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        < Header />
        <img className='home__image'
        src="https://m.media-amazon.com/images/I/71JBER9pf2L._SX3000_.jpg" 
        alt=""
        />
      
        <div className='home__row'>
          <Product title='Finish What you Start' 
          price={9.99} 
          image={'https://m.media-amazon.com/images/I/51fBE0D+B0L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg'}
          rating={5}
          />

          <Product 
          id={'098762'}
          title={'The 48 Laws of Power'}
          price={13.86}
          rating={5}
          image={'https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UY218_.jpg'}
          />
        </div>

        <div className='home__row'>
        <Product 
        id={'098765'}
        title={'Star Wars: Secrets of the Galaxy Deluxe Box Set'}
        price={62.99}
        rating={4}
        image={'https://m.media-amazon.com/images/I/81tl78Eg5uS._AC_UL320_.jpg'}
        />

        <Product 
        id={'098764'}
        title={'Star Wars Encyclopedia of Starfighters and Other Vehicles'}
        price={11.39}
        rating={5}
        image={'https://m.media-amazon.com/images/I/81PIuyCADpL._AC_UL320_.jpg'}
        />

        <Product 
        id={'098763'}
        title={'Wizarding World of Harry Potter, magical Minis Defense Against The Dark Arts Playset with 2 Exclusive Figures'}
        price={19.99}
        rating={5}
        image={'https://m.media-amazon.com/images/I/81MSjxn7NLL._AC_UL320_.jpg'}
        />
        </div>

        <div className='home__row'>
        <Product
        id={'098761'}
        title={'learn Javascript Quickly: A Complete Beginners Guide'}
        price={16.89}
        rating={5}
        image={'https://m.media-amazon.com/images/I/71oZ45OrLjL._AC_UY218_.jpg'} 
        />
        </div>
      </div>
    </div>
  )
}

export default Home