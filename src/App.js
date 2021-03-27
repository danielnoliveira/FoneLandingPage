import React,{useState} from 'react';
import Logo from './assets/logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars} from '@fortawesome/free-solid-svg-icons';
import Product from './components/Product';
function App() {
  const [index, setIndex] = useState(0);

  function changeIndex(e,value){
    var i = index;
    if(value === -1){
      if(index-1>=0){
        i -= 1;
      }else{
        i = 2
      }
    }else{
      if(index+1<=2){
        i += 1;
      }else{
        i = 0;
      }
    }
    setIndex(i);
  }
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
          <span className="horizontal__bar" onClick={(e)=>changeIndex(e,-1)}></span>
          {Array(3).fill(0).map((i,ind)=>{
            return (
              <span key={ind} className={ind===index?"circle__index red__color":"circle__index"}></span>
            );
          })}
          <span className="horizontal__bar" onClick={(e)=>changeIndex(e,1)}></span>
        </div>
          <Product imageIndex={index} />
      </main>
    </div>
  );
}

export default App;
