// src/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // you can split Home‑specific overrides here if you like

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  // whenever this component mounts (i.e. you navigate to “/”), retrigger
  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="maincontent">
      <div className="background" />
      <h1 className={`the fade-in-blur ${fadeIn ? 'show' : ''} delay-1`}>The</h1>
      <h1 className={`firstname fade-in-blur ${fadeIn ? 'show' : ''} delay-2`}>VATSAL</h1>
      <h1 className={`firstname lastname fade-in-blur ${fadeIn ? 'show' : ''} delay-3`}>Dutt</h1>
      <div className="description-sec">
        <div className={`actionbuttons ${fadeIn ? 'show' : ''}`}>
          <button className={`actionbutton fade-in-blur ${fadeIn ? 'show' : ''} delay-4`}>
            View Resume
          </button>
          <button className={`actionbutton metallic-button fade-in-blur ${fadeIn ? 'show' : ''} delay-5`}>
            <span className="gradient-text">Who even is this guy?</span>
            <span className="white-text">Who even is this guy?</span>
          </button>
        </div>
      </div>
    </div>
  );
}
