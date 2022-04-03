import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='font-bold text-4xl'>Navigation Header</h1>
            <nav>
                <Link className='mr-4' to='/'>Home</Link>
                <Link to='/orderreview'>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;