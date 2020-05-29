import React from 'react';
import './Welcome.css';
import Logo from '../../assets/images/logo.svg';
import About from './About';

const Welcome = ({element}) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}>
          <img src={Logo} alt="logo" className="welcome--logo" />
          <p>Scroll down and you will still see the Navbar</p>
          <button className="welcome__cta-primary">Contact us</button>
        </div>
      </section>
      <About />
      <About />
      <About />
    </main>
  );
};

export default Welcome;
