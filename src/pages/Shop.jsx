import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import Fotter from '../Component/Footer';
import buttonimage1 from '../assets/Images/ButtonImage1.jpg'
import buttonimage2 from '../assets/Images/ButtonImage2.jpg'
import buttonimage3 from '../assets/Images/ButtonImage3.jpg'
import buttonimage4 from '../assets/Images/ButtonImage4.jpg'
import Card1 from '../assets/Images/Card1.jpg'
import Card2 from '../assets/Images/Card2.jpg'
import Card3 from '../assets/Images/Card3.jpg'
import Card4 from '../assets/Images/Card4.jpg'

function Shop(){
  return(
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
              <h1>All Products</h1>
              <p>Run on Clouds with our collection of Swiss-engineered women’s performance running shoes and clothing for comfort both on and off the track Swiss-engineered women’s performance running shoes and Our mission at On is to ignite the human spirit through movement. Inspired by athletes. Powered by Swiss engineering. Move with us.</p>
              <div>
                <button className="SopButton"><a href=""><img src={buttonimage1} alt="" />Coats</a></button>
                <button className="SopButton"><a href=""><img src={buttonimage2} alt="" />Coord seats</a></button>
                <button className="SopButton"><a href=""><img src={buttonimage3} alt="" />Gym Wear</a></button>
                <button className="SopButton"><a href=""><img src={buttonimage4} alt="" />Trending</a></button>
              </div>
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
      <section className="Section5">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-around">
              <div class="card">
                <img class="card-img-top" src={Card1} alt="Card image cap" />
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Round Neck Sando</h5>
                    <p class="card-text">From Rs. 2600</p>
                  </div>
                  <div class="Cart">
                    <a href="#" ><i className="bi bi-handbag-fill bi-lg"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Card2} alt="Card image cap" />

                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Black Zipper Hoddie</h5>
                    <p class="card-text">From Rs. 4100</p>
                  </div>

                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill bi-4x my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Card3} alt="Card image cap" />
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Black Gym Suit</h5>
                    <p class="card-text">From Rs. 3500</p>
                  </div>
                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card" >
                <img class="card-img-top" src={Card4} alt="Card image cap" />

                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Women Brown Sando</h5>
                    <p class="card-text">From Rs. 3400</p>
                  </div>
                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 pt-4 d-flex justify-content-around">
              <div class="card">
                <img class="card-img-top" src={Card1} alt="Card image cap" />
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Round Neck Sando</h5>
                    <p class="card-text">From Rs. 2600</p>
                  </div>
                  <div class="Cart">
                    <a href="#" ><i className="bi bi-handbag-fill bi-lg"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Card2} alt="Card image cap" />

                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Black Zipper Hoddie</h5>
                    <p class="card-text">From Rs. 4100</p>
                  </div>

                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill bi-4x my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Card3} alt="Card image cap" />
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Black Gym Suit</h5>
                    <p class="card-text">From Rs. 3500</p>
                  </div>
                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card" >
                <img class="card-img-top" src={Card4} alt="Card image cap" />

                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Women Brown Sando</h5>
                    <p class="card-text">From Rs. 3400</p>
                  </div>
                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 py-4 d-flex justify-content-around">
              <div class="card">
                <img class="card-img-top" src={Card1} alt="Card image cap" />
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Round Neck Sando</h5>
                    <p class="card-text">From Rs. 2600</p>
                  </div>
                  <div class="Cart">
                    <a href="#" ><i className="bi bi-handbag-fill bi-lg"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Card2} alt="Card image cap" />

                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Black Zipper Hoddie</h5>
                    <p class="card-text">From Rs. 4100</p>
                  </div>

                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill bi-4x my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={Card3} alt="Card image cap" />
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Black Gym Suit</h5>
                    <p class="card-text">From Rs. 3500</p>
                  </div>
                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
              </div>
              <div class="card" >
                <img class="card-img-top" src={Card4} alt="Card image cap" />

                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Women Brown Sando</h5>
                    <p class="card-text">From Rs. 3400</p>
                  </div>
                  <div class="Cart">
                    <a href="#"><i className="bi bi-handbag-fill my-5"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h2>Size</h2>
                  <div class="size-options">
                    <div class="size-option" data-size="S">S</div>
                    <div class="size-option" data-size="M">M</div>
                    <div class="size-option" data-size="L">L</div>
                  </div>

                  <h2>Color</h2>
                  <div class="color-options">
                    <div class="color-option red"></div>
                    <div class="color-option blue"></div>
                    <div class="color-option green"></div>
                    <div class="color-option yellow"></div>
                    <div class="color-option purple"></div>
                  </div>
                </div>
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

export default Shop