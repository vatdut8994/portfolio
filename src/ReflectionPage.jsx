// src/ReflectionPage.jsx
import React, { useEffect, useState } from 'react';
import './ReflectionPage.css';   // we’ll put only reflection‐specific overrides here

export default function ReflectionPage() {
  const [fadeIn, setFadeIn] = useState(false);

  // 1️⃣ scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (fadeIn) {
      window.scrollTo(0, 0);
    }
  }, [fadeIn]);

  // 2️⃣ trigger our translate/fade animation
  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="reflection-page">
      <div className="anim-wrapper">
        <h1 className={`title-reflection ${fadeIn ? 'show' : ''} delay-1`}>
          Personal Reflection Paper
        </h1>
      </div>
      <div className="anim-wrapper">
        <img
          src="/img/group-photo.jpg"
          className={`reflection-pic ${fadeIn ? 'show' : ''} delay-2`}
          alt="Tech Theatre Beginning Last Picture"
        />
      </div>
      <div className={`reflection-body`}>
        {/* …all your paper content here… */}
        <p className={`section-heading ${fadeIn ? 'show' : ''} delay-3`}>Birdhouse</p>
        <p className={`delay-4 ${fadeIn ? 'show' : ''}`}>I went into this project not knowing at all what my theme would be. I still continued with the woodworking part where I got comfortable with using the chopsaw and the pneumatic staple gun. The construction was the best part for me since I have always been interested in woodworking. After the construction was done, I still had no clue what to paint on the walls. So I brainstormed by creating a list of things that represent my personality and obsessions. Even though I really wanted to make something 3D out of the birdhouse, I decided to paint something from Marvel. I started with Spider-Man and literally just went all in. I used a black base coat to go with the cinematic theme of my bird house. I never like to paint due to the complexity that comes with identifying all the different shades, but I decided to challenge myself and actually take this on. I spent days working on just this one side, even bringing it home to work on details. But time quickly ran out, and before I could even finish Spider-Man I had to come up with 4 different designs. So that night I texted all my tech theatre friends to find inspiration, and I swear I didn’t even get sleep that night. And even after all that, I was only able to fully complete 3 of the sides. But since Mr. Domack is such an awesome teacher, he accounted for my work on Spider-Man to compensate for the missing sides. And I can finally now complete all of the sides this summer!</p>
        <p className="section-heading">Scenic Paint</p>
        <p>alsdkfjas aldfjs sfsdjfslf sdl sdlfshsoigh fsoigh insog oigogndfog soighso gwog</p>
        <h2>Feedback</h2>
        <p>Almost every day this semester, I kept thinking to myself, regretting how I missed this experience for 3 years being in this school. This might be what you read on every single portfolio, but I really mean this – this was the best class I have ever taken. And the biggest part about it was you… The more I got to know you, I could feel nothing but respect. I tried to learn from your personality all semester more than I did from your construction skills. You are a perfect example of a public speaker keeping your audience engaged while speaking, by cracking jokes and singing to just straight up farming aura. I enjoyed all of the time I spent in this class, so I have absolutely zero complaints. But just to make sure that I know that you know that I know that you know – you are the best teacher ever, Mr. Domack!</p>
        <p className="signature">Cheers, <br/> Vatsal Dutt</p>
      </div>
    </div>
  );
}
