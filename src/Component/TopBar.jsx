import '../App.css'

function TopBar() {
  return (
    <>
      <div className="container TopBar">
        <div className="row py-2">
          <div className="col-lg-3">
            <div className="Contact_info d-lg-flex d-none justify-content-around">
              <div className="social-icon">
                <i className="bi bi-facebook social-icon-item" />
              </div>
              <div className="social-icon">
                <i className="bi bi-instagram social-icon-item" />
              </div>
              <div className="social-icon">
                <i className="bi bi-youtube social-icon-item" />
              </div>
              <div className="social-icon">
                <i className="bi bi-tiktok social-icon-item" />
              </div>
              <div className="social-icon">
                <i className="bi bi-twitter-x social-icon-item" />
              </div>
              <p>0123456780</p>
            </div>
          </div>
          <div className="col-lg-7 text-center">
            <p>New customers 10% off with WELCOME</p>
          </div>
          <div className="col-lg-2 Store_Module d-lg-flex d-none justify-content-around text-end">
            <div className="">
              <p><i className="bi bi-shop mx-1" />Store</p>
            </div>
            <div className="d-flex">
              <i className="bi bi-globe-asia-australia px-1" />
              <p>Ind/Inr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;