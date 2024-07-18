import React from 'react'
import { Link } from 'react-router-dom'

function WishlistIcon() {
    return (
        <div>
            <Link to="/wishlist">
                <img src="wishlist.svg" alt="" className="w-11 invert" />
            </Link>
        </div>
    )
}

export default WishlistIcon
