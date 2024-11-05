import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import Fotter from '../Component/Footer';

function Login() {
  return (
    <>
      <div className="Shop_Section1">
        <TopBar />
      </div>
      <div className="Shop_Section2">
        <Navbar />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Customer login</h1>
            </div>
          </div>
          <div className="row LoginContent">
            <div className="col-lg-6">
              <form action="">
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <div className="text-end">
                <a  href="">Forgot Password</a>
                </div>
                <button>Log In</button>
                <div className="text-end">
                <p>Don't have any account? <a href="/SigUp">Create an account</a></p>
                </div>
              </form>
            </div>
            <div className="col-lg-6 LginText">
              <p>Your shopping cart is waiting! Log in to view your order history, save your favorite items, and enjoy a seamless shopping experience.</p>
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

export default Login;