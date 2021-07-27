import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1231324"
            title="The lean Startup"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVobJ9TVryWBNA5OaBvCCMbq031dtQdbGYTQ&usqp=CAU"
            rating={2}
          />
          <Product
            id="334794"
            title="Neewer Ringlight Flashes"
            price={13.59}
            image="https://images-na.ssl-images-amazon.com/images/I/71GG8YBHMfL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="254545"
            title="Up to 20% off NINJA Foodi 6-qt Indoor Gril"
            price={119.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71rNn85HM0L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="2343545"
            title="Livho Blue Light Blocking Glasses"
            price={16.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61YSIZdPZpL._AC_SY355_.jpg"
            rating={4}
          />
          <Product
            id="735590"
            title="Cup Safety"
            price={16.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71MqAKB3HNS._AC_SL1002_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="334794"
            title="21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C355W-3440UN)"
            price={402.16}
            image="https://images-na.ssl-images-amazon.com/images/I/81bkp5rYYuL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
