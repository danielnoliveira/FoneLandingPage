import Logo from './assets/logo.svg';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,faShoppingCart,faBars} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App" data-testid="app">
      <div className="header" data-testid="header">
        <div className="header__logo" data-testid="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <input type="checkbox" hidden id="input_trick" />
        <nav className="header__navbar" data-testid="navbar">
          <ul>
            <li data-testid="nav-item"><a href="#">Home</a><span></span></li>
            <li data-testid="nav-item"><a href="#">About</a><span></span></li>
            <li data-testid="nav-item"><a href="#">Products</a><span></span></li>
            <li data-testid="nav-item"><a href="#">Support</a><span></span></li>
          </ul>
        </nav>
        <div className="header__menu" data-testid="menu">
          <FontAwesomeIcon className="iconMenu" icon={faSearch} data-testid="menu-search"/>
          <FontAwesomeIcon className="iconMenu" icon={faShoppingCart} data-testid="menu-shoppingcart"/>
          <label htmlFor="input_trick">
            <FontAwesomeIcon className="iconMenu" icon={faBars} data-testid="menu-bars"/>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
