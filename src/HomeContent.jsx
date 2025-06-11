import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomeContent({ fadeIn: parentFadeIn, simulateEducation }) {
  const location = useLocation();
  const [fadeIn, setFadeIn] = useState(false);

  // Run on first mount *and* whenever the user comes back to “/”
  useEffect(() => {
    // Only animate on the home path
    if (location.pathname === '/') {
      setFadeIn(false);
      const t = setTimeout(() => setFadeIn(true), 10);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

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
          <button
            onClick={simulateEducation}
            className={`simulate-button fade-in-blur ${fadeIn ? 'show' : ''} delay-6`}
          >
            Just show me your Tech Theatre project man
          </button>
        </div>
      </div>
    </div>
  );
}
