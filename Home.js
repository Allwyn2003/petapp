import React from 'react';
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import Banner from '../images/about.jpeg';
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Pet Shop</h1>
          <p>We provide and facilitate best pets and products with good quality</p>
          <Link to="/product" >
            <button>
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>

    </Layout>
  );
};

export default Home;
