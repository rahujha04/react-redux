import React from 'react'

const Home = () => {
  return (
    <>
    <img className='cart' src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
    <div className="Home">
        <h1>Home Component</h1>
        <div className="wrapper">
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=span-jpg&qlt=95&.v=1663611329204" alt="iphone" />
            <div className="content">
            <span>I-Phone</span>
            <span>Price: $10000.00</span>
            </div>
            <button>Add</button>
        </div>
    </div>
    </>
  )
}

export default Home