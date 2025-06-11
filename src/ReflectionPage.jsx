// src/ReflectionPage.jsx
import React, { useEffect, useState } from 'react';
import './ReflectionPage.css';   // we’ll put only reflection‐specific overrides here

export default function ReflectionPage() {
  const [fadeIn, setFadeIn] = useState(false);

  // 1️⃣ scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2️⃣ trigger our translate/fade animation
  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="reflection-page">
      <h1 className={`title-reflection ${fadeIn ? 'show' : ''}`}>
        Personal Reflection Paper
      </h1>
      <img src="/img/group-photo.jpg" className={`reflection-pic ${fadeIn ? 'show' : ''}`} alt="Tech Theatre Beginning Last Picture" />
      <div className={`reflection-body ${fadeIn ? 'show' : ''}`}>
        {/* …all your paper content here… */}
        <p>Here's where I talk about my build process, lessons learned, challenges, etc.</p>
      </div>
    </div>
  );
}
