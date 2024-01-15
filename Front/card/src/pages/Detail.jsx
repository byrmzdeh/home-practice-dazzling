import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../sass/detail.scss'
import { BasketContext } from '../context/BasketContext'
import { Helmet } from 'react-helmet'

const Detail = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const { addBasket } = useContext(BasketContext)
    fetch('http://localhost:7000/' + id)
        .then((res) => res.json())
        .then((api) => setData(api))

    return (
        <div className='detail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="icon" sizes="72x72" href="https://www.freeiconspng.com/thumbs/details-icon/details-icon-png-cc-by-3-0--it-1.png" />
            </Helmet>
            <img width={650} src={data.img} alt="err" />
            <div className="write">
                <h2>{data.name}</h2>
                <h3>Category : {data.category}</h3>
                <p>{data.desc}</p>
                <h3>Price: $ {data.price}</h3>
                <button className='link' onClick={() => addBasket(data)}>Add to Cart</button>
                <button className='link'><Link to={'/'}>Back</Link><i class="fa-solid fa-chevron-left"></i></button>
            </div>
        </div>
    )
}

export default Detail
