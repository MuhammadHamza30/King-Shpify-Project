import React, { useState, useRef, useEffect } from 'react';
import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import Fotter from '../Component/Footer';
import About_li_img1 from '../assets/Images/abt_li_1.jpg';
import About_li_img2 from '../assets/Images/abt_li_2.jpg';
import lastCard1 from '../assets/Images/LastCard-1.jpg';
import lastCard2 from '../assets/Images/LastCard-2.jpg';
import lastCard3 from '../assets/Images/LastCard-3.jpg';

function About() {

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

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
      <div className="Shop_Section1">
        <TopBar />
      </div>
      <div className="Shop_Section2">
        <Navbar />
      </div>
      <section className="About_HeroSection">
        <h1>Our Mission</h1>
        <p>Our goal is to build lasting relationships with our customers through integrity,
          excellence, <br />and a relentless pursuit of improvement.</p>
      </section>
      <section className="About_Para">
        <h1>Our mission is to provide you with an unparalleled shopping experience by offering top-tier products and exceptional customer service.</h1>
      </section>
      <section className="about_liCardsInfo">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={About_li_img1} alt="" srcset="" />
            </div>
            <div className="col-lg-6">
              <div className="text">
                <h1>The Passion and Innovation That Define Us</h1>
                <p> <b>Passion/</b> is at the core of our operations. Every product we offer is selected with care and enthusiasm, reflecting our genuine desire to provide you with exceptional quality and style.
                </p>
                <p><b>Innovation</b> is equally vital to our ethos. We are constantly exploring new trends, technologies, and ideas to bring you fresh and exciting products that set the standard in our industry.</p>
                <p>Together, our passion and innovation drive us to continually enhance our products, services, and overall customer experience.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="text">
                <h1>From Humble Beginnings to Fashion Innovators</h1>
                <p>As our brand grew, so did our ambitions. We embraced new technologies, explored fresh design concepts, and expanded our offerings to include a wide range of fashion-forward apparel.
                </p>
                <p>Looking ahead, we remain committed to our mission of redefining fashion. We will continue to blend creativity with cutting-edge technology to deliver garments that captivate and resonate.</p>
                <p>Our journey from humble beginnings to becoming fashion innovators is just the start, and we invite you to be a part of this exciting adventure.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={About_li_img2} alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
      <section className="abot_video">
        <video
          className="videoBackgroundFile"
          autoPlay
          muted
          loop
          playsInline
          data-autoplay="true"
        >
          <source
            src="//theking-castle.myshopify.com/cdn/shop/videos/c/vp/98fb444889ae4847bd963082650cf81c/98fb444889ae4847bd963082650cf81c.HD-1080p-7.2Mbps-31957357.mp4?v=0"
            type="video/mp4"
          />
        </video>
      </section>
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
            <div className="Section8 ">
              <div className='col-lg-2 col-sm-6'>
                <div className="card">
                  <img
                    src={lastCard1}
                    className="card-img-top img-fluid scale-on-hover"
                    alt="Card 1"
                  />
                </div>
              </div>
              <div className='col-lg-2 col-sm-6'>
                <div className="card">
                  <img
                    src={lastCard2}
                    className="card-img-top img-fluid"
                    alt="Card 3"
                  />
                </div>
              </div>
              <div className='col-lg-2 col-sm-6'>
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
              </div>
              <div className='col-lg-2 col-sm-6'>
                <div className="card">
                  <img
                    src={lastCard3}
                    className="card-img-top img-fluid"
                    alt="Card 3"
                  />
                </div>
              </div>
              <div className='col-lg-2 col-sm-6'>
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
      </div>
      <section className='Fotter'>
        <Fotter />
      </section>

    </>
  )
}

export default About;