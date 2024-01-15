import React from 'react'
import '../sass/footer.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="other">
                <p>Other Pages</p>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <hr />
                    <li><NavLink to={'/add'}>Add Page</NavLink></li>
                    <hr />
                    <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
                    <hr />
                    <li><NavLink to={'/basket'}>Basket</NavLink></li>
                    <hr />
                </ul>
            </div>
            <div className="colorlib">
                <img width={370} src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png" alt="err" />
                <p>Awesome and completely free WordPress WooCommerce <br /> themes to take your ecommerce website to the next level.</p>
                <p>If you are having problems with theme setup, please feel free to <br /> use Colorlib support forum.</p>
            </div>



        </div>
    )
}

export default Footer
