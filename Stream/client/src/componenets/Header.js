import React from 'react';
import {Link} from 'react-router-dom'
import Googleauth from './Googleauth'

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>
                StreamY
            </Link>
            <div className='right menu'>
            <Link to='/' className='item'>
                All Streams
            </Link>
            </div>
            <Googleauth />
        </div>
    )
}

export default Header
