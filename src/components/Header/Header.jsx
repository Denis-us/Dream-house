import React, {useState, useEffect} from 'react';
import Logo from '../Logo/Logo';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
      
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={s.header}>
            <div class="container">
              <div class={s.siteNav}>
                <Logo/>
                
                <BurgerMenu isClicked={isClicked} handleClick={handleClick}/>
                <Navigation isClicked={!isMobile || isClicked}/>
                
              </div>
            </div>
        </header>
    );
  }

export default Header