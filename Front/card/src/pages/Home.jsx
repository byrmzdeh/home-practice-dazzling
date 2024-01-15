import React, { useContext, useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import '../sass/home.scss'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'
import { Helmet } from "react-helmet";



const Home = () => {
    const [data, setData] = useState(null)
    const [input, setInput] = useState('')
    const [sortBy, setSortBy] = useState(null)
    const { addBasket } = useContext(BasketContext)
    const { handleWishlist, checkWishlist } = useContext(WishlistContext)

    useEffect(() => {
        fetch('http://localhost:7000/')
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='home'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="icon" sizes="72x72" href="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
            </Helmet>

            <div className="one">
                <Slider {...settings}>
                    <div className='slide'>
                        <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02.jpg" alt="err" />
                        <div className='text'>
                            <div className='markup'>
                                <h2>Markup: Title With Special Characters</h2>
                            </div>
                            <div className="title">
                                <p>Markup: Title With Special Characters ~`!@#$%^&*()-_=+{ }[]/;:'”?,. Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the post title have been known to cause issues with JavaScript when it is minified, especially in the admin when editing the post itself ie. issues with metaboxes, media upload, […]</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg"
                            alt="" />
                        <div className='text'>
                            <div className='markup'>
                                <h2>Markup: HTML Tags and Formatting</h2>
                            </div>
                            <div className="title">
                                <p>Headings Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to […]</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg" alt="" />
                        <div className='text'>
                            <div className='markup'>
                                <h2>Markup: Image Alignment</h2>
                            </div>
                            <div className="title">
                                <p>Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.</p>
                            </div>
                        </div>
                    </div>
                </Slider>

                <div className="do">
                    <h1>Do you like this awesome and free WordPress WooCommerce theme?</h1>
                    <button>Download Now!</button>
                </div>

            </div>

            <div className="two">
                <div className="left">
                    <div className="cards">
                        {data === null ? <h2>Loading...</h2> :
                            data
                                .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
                                .sort((a, b) => {
                                    if (!sortBy) {
                                        return 0
                                    } else if (sortBy.asc) {
                                      return  (a[sortBy.preporty] > b[sortBy.preporty]) ? 1 : ((b[sortBy.preporty] > a[sortBy.preporty]) ? -1 : 0)

                                    }else if (sortBy.asc===false) {
                                       return (a[sortBy.preporty] < b[sortBy.preporty]) ? 1 : ((b[sortBy.preporty] < a[sortBy.preporty]) ? -1 : 0)
                                    }
                                })
                                .map(item => (
                                    <div className="card" key={item._id}>
                                        <h2>{item.name}</h2>
                                        <div className='icons'>
                                            <p><i class="fa-solid fa-calendar-days"></i>{item.date}</p>
                                            <p><i class="fa-solid fa-folder-open"></i>{item.category}</p>
                                            <i class={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`} onClick={() => handleWishlist(item)}></i>
                                            <i class="fa-solid fa-cart-arrow-down" onClick={() => addBasket(item)}></i>
                                        </div>
                                        <div className="image">
                                            <img width={500} height={250} src={item.img} alt="err" />
                                            <div className="details">
                                                <p>{item.desc}</p>
                                                <h3>${item.price}</h3>
                                                <button className='link'><Link to={`/${item._id}`}>Continue Reading</Link><i class="fa-solid fa-chevron-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                    </div>

                </div>
                <div className="right">
                    <div className="input">
                        <input type="text" placeholder='Search ' value={input} onChange={(e) => setInput(e.target.value)} />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h1>Filter : </h1>
                    <div className="buttons">
                        <button onClick={()=>setSortBy({preporty:"name" , asc:true})}>A-Z</button>
                        <button onClick={()=>setSortBy({preporty:"name" , asc:false})}>Z-A</button>
                        <button onClick={()=>setSortBy({preporty:"price" , asc:true})}>Artan</button>
                        <button onClick={()=>setSortBy({preporty:"price" , asc:false})}>Azalan</button>
                        <button onClick={()=>setSortBy(null)}>Default</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
