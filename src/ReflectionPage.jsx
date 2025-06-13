// src/ReflectionPage.jsx
import React, { useEffect, useState } from 'react';
import './ReflectionPage.css';   // we’ll put only reflection‐specific overrides here
import { Link } from 'react-router-dom';

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
      <button
        href="/techtheatre"
        className="back-button"
        aria-label="Back to Tech Theatre"
      >
        <Link to="/techtheatre">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M13 16L7 10L13 4"
              stroke="rgb(212, 212, 212)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </button>
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
        <p className={`delay-4 ${fadeIn ? 'show' : ''}`}>I went into this project with zero clue about my theme, but I still started with the woodworking part, getting comfortable with the chop saw and pneumatic staple gun along the way. Building the structure was my favorite part because I’ve always loved construction and hands-on building. When it came time to paint, I was still blank so I made a list of all the things that represent my personality and my obsessions – and even though I really wanted to turn the birdhouse into some kind of 3D form, I stuck with Marvel and started painting Spider-Man. I used a black base coat to match the cinematic look I had in mind and challenged myself to try shading with colors, even though I usually avoid painting for exactly that reason.But I ended up spending days just on that one side—bringing it home, detailing it late into the night. But time caught up to me fast where I had to design four more different sides, and I hadn’t even finished Spidey. That night I texted all my tech theatre friends desperately looking for inspiration and barely even slept. In the end, I was only able to fully finish three sides. But since Mr. Domack’s the GOAT, he let my Spider-Man side compensate for the other sides I wasn’t able to do. Now I can finally finish all the sides and detailing this summer!</p>
        <p className="section-heading">Scenic Paint</p>
        <p>I feel like this was the project that lasted the longest in this class. It required us to create a Hollywood-style flat and apply various painting techniques. The biggest challenge about this project was to have all the pieces aligned perfectly to fit, where I had to go back and forth to the chopsaw for proper adjustments in the size of the toggles. And even though I double checked the length with a tape measure every time, there was somehow always a misalignment. And between the paint techniques, I did not get much time to assemble the luan to the rest of my frame, where in the meanwhile Wilder ended up breaking it. But everything other than that went smoothly. At the end of the project, we were at a little time crunch so the rush work reduced the quality of our final scenic paint. But overall, this was a fun project and actually allowed us to use our creativity in our individual flats to combine the theme of the entire table.</p>
        <p className="section-heading">Hobbit House</p>
        <p>I started the hobbit house wanting to make a Disney castle. We had to use paper mache with tape under it to create a textured surface of the walls. To figure this out, I even created an entire 3D model with all the dimensions to understand exactly how to make it, but I soon realized that it would not be possible to model the intricate details and smooth surface on the castle using paper mache. So I decided to go with what everyone else was doing. We used Durham’s Rock Hard putty to cover the surface of the hobbit house and engrave lines in it with a fork to mimic the look of a tree. Then we added other decorations and paint to make it more appealing. But I had to do everything in a rush again due to AP Exams and my Junior Marshal duties, for which I missed an entire week of class during this period. Looking back, this one felt like a letdown – not just because of the work, but because most of us ended up with nearly identical projects. It didn’t have that personal flair like the birdhouse, where you could see a glimpse of everyone’s personality just through their piece.</p>
        <h2>Feedback</h2>
        <p>Almost every day this semester, I kept thinking to myself, regretting how I missed this experience for 3 years being in this school. This might be what you read on every single portfolio, but I really mean this – this was the best class I have ever taken. And the biggest part about it was you… The more I got to know you, I could feel nothing but respect. I tried to learn from your personality all semester more than I did from your construction skills. You are a perfect example of a public speaker keeping your audience engaged while speaking, by cracking jokes and singing to just straight up farming aura. I enjoyed all of the time I spent in this class, so I have absolutely zero complaints. But just to make sure that I know that you know that I know that you are the best teacher ever, Mr. Domack!</p>
        <p className="signature">Cheers, <br /> Vatsal Dutt</p>
      </div>
    </div>
  );
}
