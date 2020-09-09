import React, { Component } from 'react';
import Style from './nav.module.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar =()=> {
   
        return (
            <div  className={Style.navhead}>


                <div className={Style.nav}>
               
                        
                    <Link activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                           
                        >
                        Home
                        </Link>
                    

                    <Link activeClass="active"
                            to="favourite"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                        >
                        Favourite
                        </Link>
                
                </div>
            <hr/>
            </div>
        );
    
}

export default Navbar;