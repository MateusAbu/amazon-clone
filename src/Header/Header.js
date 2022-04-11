import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'

function Header() {

    const [{ cart, user }, dispatch] = useStateValue()

    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }


    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header-logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='Amazon Logo'
                />
            </Link>
            {/* Logo */}

            {/* Search Bar and Icon */}
            <div className='header-search'>
                <input
                    className='header-searchInput'
                    type='text'
                />
                <SearchIcon className='header-searchIcon' />

            </div>

            {/* Options */}
            <div className='header-nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className='header-option'>
                        <span className='header-optionLineOne'>Hello User</span>
                        <span className='header-optionLineTwo'>{user ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header-option'>
                    <span className='header-optionLineOne'>Returns</span>
                    <span className='header-optionLineTwo'>& Orders</span>
                </div>

                <div className='header-option'>
                    <span className='header-optionLineOne'>Your</span>
                    <span className='header-optionLineTwo'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className='header-optionCart'>
                        <ShoppingCart />
                        <span className='header-optionLineTwo header-cartCount'>{cart?.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header