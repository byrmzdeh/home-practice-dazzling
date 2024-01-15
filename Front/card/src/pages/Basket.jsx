import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import '../sass/basket.scss'
import { Helmet } from 'react-helmet'

const Basket = () => {
  // const data = {addBasket , increaseCount , decreaseCount , remove , basket}

  const { basket, increaseCount, decreaseCount, remove } = useContext(BasketContext)
  return (
    <div className='basket'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <link rel="icon" sizes="72x72" href="https://icon-library.com/images/shop-icon-png/shop-icon-png-25.jpg" />
      </Helmet>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Category</th>
          <th>Price</th>
          <th>Date</th>
          <th>Count</th>
          <th>Delete</th>
        </tr>
        {basket.map(item => (
          <tr>
            <td><b>{item.name}</b></td>
            <td><img width={150} src={item.img} alt="" /></td>
            <td>{item.category}</td>
            <td><b>$ {item.price * item.count}</b></td>
            <td>{item.date}</td>
            <td>
              <div className="count">
                <i class="plus fa-solid fa-caret-up" onClick={() => increaseCount(item)}></i>
                <h2>{item.count}</h2>
                <i class="minus fa-solid fa-caret-down" onClick={() => decreaseCount(item)}></i>

              </div>
            </td>
            <td><i class="remove fa-solid fa-trash-can" onClick={() => remove(item)}></i></td>


          </tr>
        ))}



      </table>
    </div>
  )
}

export default Basket
