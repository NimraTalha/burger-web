import React from 'react';
import Navbar from '../app/components/Navbar';
import Carousel from '../app/components/Carousel';
import Progressor from '../app/components/Progressor';
import ProductList from '../app/components/ProductList';
import Banner from '../app/components/Banner';
import Offers from '../app/components/Offers';
import Card from '../app/components/Card';
import Testimonal from '../app/components/Testimonal';
import Footer from '../app/components/Footer';
import Menu from '../app/components/Menu';
import Burger from '../app/components/Burger';


const App = () => {
  return (
    <div className ='bg-gradient-to-r from-black to gray-700 min-h-screen'>
     <Navbar/>
     <Carousel/>
     <Progressor/>
     <ProductList/>
     <Banner/>
     <Burger/>
     <Menu/>
     <Offers/>
     <Card/>
     <Testimonal/>
     <Footer/>



    </div>
  )
}

export default App;

