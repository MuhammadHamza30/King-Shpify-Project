import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSearchClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg custom-navbar">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="logo-container mx-auto">
                  <div className="logo navbar-logo img-fluid"></div>
                </div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav mx-auto">
                    <a className="nav-link" href="/">Home</a>

                    {/* Dropdown Menu */}
                    <div className="nav-item dropdown custom-dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/Shop"
                        id="navbarDropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item d-flex justify-content-between align-items-center sub-dropdown-container">
                          Gym Wear
                          <i className="bi bi-arrow-right-short"></i>
                          {/* Sub-List */}
                          <ul className="sub-dropdown-menu">
                            <li className="sub-dropdown-item">3pc gym suits</li>
                            <li className="sub-dropdown-item">Rearback sports bra</li>
                            <li className="sub-dropdown-item">Black Co-ord sets</li>
                            <li className="sub-dropdown-item">Shorts with top</li>
                            <li className="sub-dropdown-item">High rise short with top</li>
                          </ul>
                        </li>
                        <li className="dropdown-item d-flex justify-content-between align-items-center sub-dropdown-container">
                          Inner Wear
                          <i className="bi bi-arrow-right-short"></i>
                          <ul className="sub-dropdown-menu">
                            <li className="sub-dropdown-item">Black Co-ord sets</li>
                            <li className="sub-dropdown-item">High rise short with top</li>
                            <li className="sub-dropdown-item">3pc gym suits</li>
                            <li className="sub-dropdown-item">Shorts with top</li>
                            <li className="sub-dropdown-item">Rearback sports bra</li>
                          </ul>
                        </li>
                        <li className="dropdown-item d-flex justify-content-between align-items-center sub-dropdown-container">
                          Outer Wear
                          <i className="bi bi-arrow-right-short"></i>
                          <ul className="sub-dropdown-menu">
                            <li className="sub-dropdown-item">High rise short with top</li>
                            <li className="sub-dropdown-item">Shorts with top</li>
                            <li className="sub-dropdown-item">Black Co-ord sets</li>
                            <li className="sub-dropdown-item">Rearback sports bra</li>
                            <li className="sub-dropdown-item">3pc gym suits</li>
                          </ul>
                        </li>
                        <li className="dropdown-item d-flex justify-content-between align-items-center sub-dropdown-container">
                          Hoodies
                          <i className="bi bi-arrow-right-short"></i>
                          <ul className="sub-dropdown-menu">
                            <li className="sub-dropdown-item">Rearback sports bra</li>
                            <li className="sub-dropdown-item">3pc gym suits</li>
                            <li className="sub-dropdown-item">Black Co-ord sets</li>
                            <li className="sub-dropdown-item">High rise short with top</li>
                            <li className="sub-dropdown-item">Shorts with top</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <a className="nav-link" href="/NewArrivals">New Arrivals</a>
                    <a className="nav-link" href="/Collection">Collection</a>
                    <a className="nav-link" href="/About">About</a>
                  </div>
                </div>

                <div className="topIcon">
                  <i className="bi bi-search my-5" onClick={handleSearchClick}></i>
                  <a href='/Login'><i className="bi bi-person my-5"></i></a>
                  <i className="bi bi-handbag my-5"></i>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={`popup ${showPopup ? 'show' : ''}`}>
          <div className="popup-content">
            <h1><b>Search</b></h1>
            <button className="close-btn" onClick={handleClosePopup}>
              <i class="bi bi-x-circle"></i>
            </button>
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <div className='search'><i className="bi bi-search"></i></div>
            </div>
            <h5 className='pt-5'><b>Popular Search</b></h5>
            <ul>
              <li><i class="bi bi-arrow-up-right"></i> Suits</li>
              <li><i class="bi bi-arrow-up-right"></i> Activewear Suits</li>
              <li><i class="bi bi-arrow-up-right"></i> Coats</li>
              <li><i class="bi bi-arrow-up-right"></i> Spotrs Wear</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
