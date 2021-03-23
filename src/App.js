import Logo from './assets/logo.svg';
import Fone from './assets/fone.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App" data-testid="app">
      <div className="header" data-testid="header">
        <div className="header__logo" data-testid="logo">
          <img src={Logo} alt="logo" />
        </div>
        <input type="checkbox" hidden id="input_trick" />
        <nav className="header__navbar" data-testid="navbar">
          <ul>
            <li data-testid="nav-item"><a href="#Home">Home</a><span></span></li>
            <li data-testid="nav-item"><a href="#About">About</a><span></span></li>
            <li data-testid="nav-item"><a href="#Product">Products</a><span></span></li>
            <li data-testid="nav-item"><a href="#Support">Support</a><span></span></li>
          </ul>
        </nav>
        <div className="header__menu" data-testid="menu">
          <FontAwesomeIcon className="iconMenu" icon={faSearch} data-testid="menu-search" />
          <FontAwesomeIcon className="iconMenu" icon={faShoppingCart} data-testid="menu-shoppingcart" />
          <label htmlFor="input_trick">
            <FontAwesomeIcon className="iconMenu" icon={faBars} data-testid="menu-bars" />
          </label>
        </div>
      </div>
      <main data-testid="main">
        <div className="main__index" data-testid="index_items">
          <span className="horizontal__bar"></span>
          <span className="circle__index red__color"></span>
          <span className="circle__index"></span>
          <span className="circle__index"></span>
          <span className="horizontal__bar"></span>
        </div>
        <div className="product__shower">
          <div className="product__image">
            <img src={Fone} alt="Fone" />
          </div>
          <div className="product__info">
            <div className="info__container">

              <h1 className="info__name">hyper x on-ear</h1>
              <h6 className="info__subname">Wireless over-ear headphones</h6>
              <div>
                {Array(5).fill(0).map((i, index) => {
                  return (
                    <FontAwesomeIcon key={index} className="star__icon" icon={faStar} color={index < 4 ? "#ca3b3a" : "#707070"} data-testid="menu-shoppingcart" />
                  );
                })}
                <span className="info__avaliable">4.2 (355)</span>
              </div>
              <div className="info__specialInfo">
                <h6>
                  Driver unit
              </h6>
                <p>
                  70 mm, dome type (CCAW Voice Col)
              </p>
              </div>
              <div className="info__specialInfo">
                <h6>
                  Frequency Response
              </h6>
                <p>
                  4 Hz + 100.000 Hz
              </p>
              </div>
              <div className="info__footer">
                <span className="info__price">$89.99</span>
                <button value="buy">ADD TO CART</button>
              </div>
            </div>
          </div>

          <div className="product__footer">
            <div className="footer__special">
              <i className="fas fa-wave-square"></i>
              <span>High-Resolution Audio compatible
              </span>
            </div>
            <div className="footer__special">
              <i className="fab fa-bluetooth-b"></i>
              <span>Wireless connectivity using bluetooth
              </span>
            </div>
            <div className="footer__special">
              <i className="fas fa-battery-empty"></i>
              <span>A powerful battery that lasts up to 4 hours of use
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
