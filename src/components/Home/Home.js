import React from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='tshirt-container col-span-3'>

            </div>
            <div className='cart-container col-span-1'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;