import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import Fotter from '../Component/Footer';
import Cardimage1 from '../assets/Images/ButtonImage1.jpg'
import Cardimage2 from '../assets/Images/ButtonImage2.jpg'
import Cardimage3 from '../assets/Images/ButtonImage3.jpg'
import Cardimage4 from '../assets/Images/ButtonImage4.jpg'
import Cardimage5 from '../assets/Images/collection-1.jpg'
import Cardimage6 from '../assets/Images/colection-2.jpg'
import Cardimage7 from '../assets/Images/collection-3.jpg'
import Cardimage8 from '../assets/Images/card_image1.jpg'

function NewArrivals() {
  return (
    <>
      <div className="Shop_Section1">
        <TopBar />
      </div>
      <div className="Shop_Section2">
        <Navbar />
      </div>
      <section className="Shop_Section3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>New Arrivals</h1>
              <p>Explore our New Arrivals and discover the freshest additions to our collection. From cutting-edge designs and vibrant colors to sophisticated styles and classic essentials, our latest offerings are crafted to elevate your wardrobe. Whether you're looking for the perfect outfit for a special occasion or seeking everyday elegance, our new arrivals have something for everyone.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-wrapper section-spacing">
          <div className="marquee-wrapper">
            <div
              className="marquee-block-node autoplay-infinite rtl-direction"
              id="marqueeBlock-marque_UUT6jL"
              data-marquee-speed-desktop="15"
              data-marquee-speed-mobile="20"
            >
              {Array(10).fill(0).map((_, index) => (
                <div className="marquee-block" key={index}>
                  <div className="marquee-block-item text-item">
                    <p className="marquee-text">NEW STYLE</p>
                  </div>
                  <div className="marquee-block-item icon-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <rect
                        width="13"
                        height="13"
                        rx="6.5"
                        transform="matrix(1 0 0 -1 7 20)"
                        fill="black"
                      ></rect>
                    </svg>
                  </div>
                  <div className="marquee-block-item text-item">
                    <p className="marquee-text">NEW SEASON</p>
                  </div>
                  <div className="marquee-block-item icon-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <rect
                        width="13"
                        height="13"
                        rx="6.5"
                        transform="matrix(1 0 0 -1 7 20)"
                        fill="black"
                      ></rect>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="Section5 Arival_Card">
        <div className="container">
          <div className="row row1">
            <div className="col-lg-12  d-flex justify-content-around">
                <div className="card">
                  <img src={Cardimage1} alt="" />
                  <h1>Coats</h1>
                  <i className="bi bi-arrow-right-circle arrow-icon"></i>
                </div>
              <div className="card">
                <img src={Cardimage2} alt="" />
                <h1>Coats</h1>
                <i className="bi bi-arrow-right-circle arrow-icon"></i>
                </div>
              <div className="card"><img src={Cardimage3} alt="" />
              <h1>Coats</h1>
              <i className="bi bi-arrow-right-circle arrow-icon"></i>
              </div>
              <div className="card"><img src={Cardimage4} alt="" />
              <h1>Coats</h1>
              <i className="bi bi-arrow-right-circle arrow-icon"></i>
              </div>
            </div>
          </div>
          <div className="row row2">
            <div className="col-lg-12 d-flex justify-content-around">
              <div className="card"><img src={Cardimage5} alt="" />
              <h1>Coats</h1>
              <i className="bi bi-arrow-right-circle arrow-icon"></i>
              </div>
              <div className="card"><img src={Cardimage6} alt="" />
              <h1>Coats</h1>
              <i className="bi bi-arrow-right-circle arrow-icon"></i>
              </div>
              <div className="card"><img src={Cardimage7} alt="" />
              <h1>Coats</h1>
              <i className="bi bi-arrow-right-circle arrow-icon"></i>
              </div>
              <div className="card"><img src={Cardimage8} alt="" />
              <h1>Coats</h1>
              <i className="bi bi-arrow-right-circle arrow-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Fotter'>
        <Fotter />
      </section>

    </>
  )
}

export default NewArrivals;