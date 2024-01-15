import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import '../sass/wishlist.scss'
import { BasketContext } from '../context/BasketContext'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext)
  const { addBasket } = useContext(BasketContext)
  return (
    <div className='wishlist'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="icon" sizes="79x79" href="https://static.thenounproject.com/png/1964845-200.png" />
      </Helmet>
      {wishlist.map(item => (
        <div className="card">
          <img src={item.img} width={300} alt="" />
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <h3>&{item.price}</h3>
          <button className='link' onClick={() => addBasket(item)}>Add to Cart</button>

        </div>
      ))}


    </div>
  )
}

export default Wishlist
