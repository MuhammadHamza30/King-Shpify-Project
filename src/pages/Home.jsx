import React, { useEffect, useRef, useState } from 'react';
import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import 'owl.carousel/dist/owl.carousel.min.js';
import heroImage1 from '../assets/Images/Website-banner.jpg';
import heroImage2 from '../assets/Images/Website-banner2.jpg';
import image1 from '../assets/Images/collection-1.jpg'
import image2 from '../assets/Images/colection-2.jpg'
import image3 from '../assets/Images/collection-3.jpg'
import thumnail from '../assets/Images/videoThumnail.jpg'
import catigariImage1 from '../assets/Images/catigariImage1.jpg'
import catigariImage2 from '../assets/Images/catigariImage2.jpg'
import catigariImage3 from '../assets/Images/catigariImage3.jpg'
import Card1 from '../assets/Images/Card1.jpg'
import Card2 from '../assets/Images/Card2.jpg'
import Card3 from '../assets/Images/Card3.jpg'
import Card4 from '../assets/Images/Card4.jpg'
import { MdOutlineShield } from "react-icons/md";
import { RiBox3Fill } from "react-icons/ri";
import { SlReload } from "react-icons/sl";
import { FiHeadphones } from "react-icons/fi";
import Fotter from '../Component/Footer';
import lastCard1 from '../assets/Images/LastCard-1.jpg'
import lastCard2 from '../assets/Images/LastCard-2.jpg'
import lastCard3 from '../assets/Images/LastCard-3.jpg'

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'owl.carousel/dist/owl.carousel.min.js';

function Home() {

  $(document).ready(function () {
    $('.heroSection').owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      },
    });
  });

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      removeActiveClass();
      card.classList.add('active');
    });
  });

  function removeActiveClass() {
    cards.forEach(card => {
      card.classList.remove('active');
    });
  }


  const sizeOptions = document.querySelectorAll('.size-option');

  sizeOptions.forEach(option => {
    option.addEventListener('click', function () {
      sizeOptions.forEach(opt => opt.classList.remove('active')); // Remove active class from all
      this.classList.add('active'); // Add active class to the selected one
    });
  });

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  // Video control logic for the second card
  useEffect(() => {
    const handlePlayPause = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        videoRef1.current.play();
        setIsPlaying1(true);
      } else {
        videoRef1.current.pause();
        setIsPlaying1(false);
      }
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
    });

    if (videoRef1.current) {
      observer.observe(videoRef1.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleVideoPlayPause = () => {
    if (isPlaying1) {
      videoRef1.current.pause();
    } else {
      videoRef1.current.play();
    }
    setIsPlaying1(!isPlaying1);
  };

  const toggleVideo2PlayPause = () => {
    if (isPlaying2) {
      videoRef2.current.pause();
    } else {
      videoRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };


  return (
    <>
      <div className="Section1">
        <TopBar />
      </div>
      <div className="Section2">
        <Navbar />
      </div>
      <div className="carousel-container">
        <div className="heroSection owl-carousel owl-theme">
          <div className="item">
            <div className="image-container">
              <img src={heroImage1} alt="Slide 1" />
              <h2 className="image-heading">
                <p>Where Sophistication meets street-savvy fashion.</p>
                <p>Classic</p>
                <p>Streetwear</p>
                <a href="#" className='shopNow'>
                  <i class="bi bi-arrow-right-circle"></i> Sop Now
                </a>
                <a href="#" className='ViewMore'>
                  <i class="bi bi-arrow-right-circle"></i> View More
                </a>
              </h2>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={heroImage2} alt="Slide 2" />
              <h2 className="image-heading">
                <p>Where Sophistication meets street-savvy fashion.</p>
                <p>Classic</p>
                <p>Streetwear</p>
                <a href="#" className='shopNow'>
                  <i class="bi bi-arrow-right-circle"></i>
                  <span>Sop Now</span>
                </a>
                <a href="#">
                  <i class="bi bi-arrow-right-circle"></i>
                  <span>View More</span>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='Section3'>
        <div className="container">
          <div className='herofooter'>
            <div className="row">
              <div className="col-lg-6 pt-5 px-5">
                <div className='Image'>
                  <img className='iamge1' src={image1} alt="" />
                  <img className='iamge2' src={image2} alt="" />
                  <img className='iamge3' src={image3} alt="" />
                </div>
                <div className='text'>
                  <h6>Weekend Special Sale -
                    Extra 20% Off</h6>
                  <p className='py-3'><a href="">Show More <i class="bi bi-arrow-right-circle"></i></a></p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className='videoPlay pt-3 d-flex'>
                  <div className="image-container-thum">
                    <img src={thumnail} className="thumnail" alt="" />
                    <i className="bi bi-play-circle play-icon"></i>
                  </div>

                  <div className='p-3'>
                    <h5>New Arrivals Sale</h5>
                    <p>Check out our new arrivals and enjoy a 15% discount on the latest products!</p>
                  </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Section4'>
        <div className="comtainer">
          <div className="row">
            <div className="col">
              <div className='Catigouress'>
                <h1>BUY MORR, SAVE MORE</h1>
                <ul>
                  <div><a href="">Cord-Sets</a></div>
                  <a href=""><img src={catigariImage1} alt="" /></a>
                  <div><a href="">Jackets</a></div>
                  <div><a href="">Hoodies</a></div>
                  <div><a href="">Trending Tops</a></div>
                  <div><a href="">Smart Watches</a></div>
                  <div><a href="">Sneakers</a></div>
                  <div><a href="">Outwears</a></div>
                  <a href=""><img src={catigariImage2} alt="" /></a>
                  <div><a href="">Gym Suits</a></div>
                  <a href=""><img src={catigariImage3} alt="" /></a>
                  <div><a href="">Latest Brand</a></div>
                  <div><a href="">Chic Style</a></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="weekend-deals">
                <span className="transparent-text">WEEKEND</span> DEALS
              </h1>
            </div>
          </div>
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
        </div>
      </div>
      <div className="Section6">
        <div class="container my-5">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="weekend-deals">
                SUPPORT & <span className="transparent-text">RESOURCES</span>
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <RiBox3Fill size={50} ></RiBox3Fill >
                  <h5 class="card-title">Free Shipping</h5>
                  <p class="card-text">We are committed to getting your products to you quickly & without any additional cost.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <MdOutlineShield size={50}></MdOutlineShield>
                  <h5 class="card-title">100% Secure</h5>
                  <p class="card-text">Your payment information is protected with our 100% Secured Payments system with us.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <SlReload size={50}></SlReload>
                  <h5 class="card-title">30-days Returns</h5>
                  <p class="card-text">We provide a risk-free shopping experience with our Easy 30-Day Return guarantee.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <FiHeadphones size={50}></FiHeadphones>
                  <h5 class="card-title">Chat Support</h5>
                  <p class="card-text">Receive instant answers to your questions with no waiting time required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="Exploring">
                <div className="text">
                  <h1>New Fashion</h1>
                  <p>Our collection is designed to keep you looking stylish and feeling confident</p>
                  <button>
                    <img src={Card4} alt="Icon" />
                    <span>Explore</span>
                    <span className="plus-sign">+</span>
                  </button>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-around">
                  <div className='Cards'>
                    <div class="card card1 mx-5">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section8">
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-12 text-center">
            <h1 className="weekend-deals">
                STAY <span className="transparent-text">CONNECTED</span>
              </h1>
              <p>
                Connect with us on our platforms to join our community and engage with our brand. Whether it's new product launches,
                special promotions, or exciting updates, our social media channels are the best way to stay in the loop.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-around Section8">
              <div className="card">
                <img
                  src={lastCard1}
                  className="card-img-top img-fluid scale-on-hover"
                  alt="Card 1"
                />
              </div>
              <div className="card">
                <img
                  src={lastCard2}
                  className="card-img-top img-fluid"
                  alt="Card 3"
                />
              </div>
              <div className="card">
                <video
                  ref={videoRef1}
                  src="//theking-castle.myshopify.com/cdn/shop/videos/c/vp/12489ef50d3e4fe797a0967abff98130/12489ef50d3e4fe797a0967abff98130.HD-1080p-7.2Mbps-32552816.mp4?v=0"
                  className="card-img-top img-fluid"
                  muted
                  autoPlay:true
                ></video>
                <div
                  className="position-absolute top-0 end-0 p-3"
                  style={{ zIndex: 1 }}
                >
                  <button className="btn" onClick={toggleVideoPlayPause}>
                    {isPlaying1 ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src={lastCard3}
                  className="card-img-top img-fluid"
                  alt="Card 3"
                />
              </div>
              <div className="card">
                <video
                  ref={videoRef2}
                  src="//theking-castle.myshopify.com/cdn/shop/videos/c/vp/fd12c57adaef4cec97fd0083925c6888/fd12c57adaef4cec97fd0083925c6888.HD-1080p-7.2Mbps-32617819.mp4?v=0"
                  className="card-img-top img-fluid"
                  muted
                  autoPlay:true
                ></video>
                <div
                  className="position-absolute top-0 end-0 p-3"
                  style={{ zIndex: 1 }}
                >
                  <button className="btn" onClick={toggleVideo2PlayPause}>
                    {isPlaying2 ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className='Fotter'>
        <Fotter />
      </section>

    </>
  );
}

export default Home;
