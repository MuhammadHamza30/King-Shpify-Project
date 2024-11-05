
import logo from '../assets/Images/logo-w.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

function Fotter() {
  return (
    <>
      <footer class="container py-5">
        <div class="row">
          <div class="col-lg-5">
            <div className='InfoSection'>
              <img src={logo} class="mb-3" style={{ width: "150px" }} />
              <p>This is a demonstration store. This demo product is not available for purchase. The product images have been taken from freepik.</p>
              <div class="social-icons">
                <a href="#"><FaFacebookF size={20}></FaFacebookF></a>
                <a href="#"><FaInstagram size={20}></FaInstagram></a>
                <a href="#"><IoLogoYoutube size={20}></IoLogoYoutube></a>
                <a href="#"><FaTwitter size={20}></FaTwitter></a>
                <a href="#"><FaTiktok size={20}></FaTiktok></a>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div className='TabSection'>
              <div class="row mb-4">
                <div class="col-12">
                  <p>Introducing our New Fashion Collection, where contemporary style meets timeless elegance.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <h5>About Links</h5>
                  <ul>
                    <li><a href="#">
                      Home page
                    </a></li>
                    <li><a href="#">
                      Search
                    </a></li>
                    <li><a href="#">
                      All collections
                    </a></li>
                    <li><a href="#">
                      Contact
                    </a></li>
                    <li><a href="#">
                      News
                    </a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h5>Help and Support</h5>
                  <ul>
                    <li><a href="#">Contact Information</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">News</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h5>Top Sellings</h5>
                  <ul>
                    <li><a href="#">Black Co-ord set</a></li>
                    <li><a href="#">Racerback sports bra</a></li>
                    <li><a href="#">High rise shorts with top</a></li>
                    <li><a href="#">Denim Jean</a></li>
                    <li><a href="#">3pc gym suit</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row ">
          <div className='bottom_Bar'>
            <div class="col-md-4 d-flex">
              <i className="bi bi-globe-asia-australia px-1" />
              <p>Ind/Inr</p>
            </div>
            <div class="col-md-4">
              <ul>
                <li><a href="#">Refund policy</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Contact information</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <p>Copyright© 2024 <a href="">theking-castle Powered by Shopify</a> </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Fotter;