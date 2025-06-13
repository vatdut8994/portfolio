import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import './TechTheatrePage.css';

export default function TechTheatrePage() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        const timeout = setTimeout(() => setAnimate(true), 20);
        return () => clearTimeout(timeout);
    }, []);

    const slides = [
        { title: 'Lighting and Sound', img: '/img/light-sound.jpg' },
        { title: 'Scenery and Tools', img: '/img/powertool.jpg' },
        { title: 'Painting', img: '/img/paint.jpg' },
        { title: 'Flats', img: '/img/flats.jpg' },
        { title: 'Props', img: '/img/goblet.png' },
    ];

    const CARD_W = 320;
    const GAP = 20;
    const STEP = CARD_W + GAP;

    // track current step index
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent(i => Math.max(i - 1, 0));
    const next = () => setCurrent(i => Math.min(i + 1, slides.length - 1));

    const carouselRef = useRef();
    const [maxOffset, setMaxOffset] = useState(0);
    useLayoutEffect(() => {
        if (!carouselRef.current) return;
        const vw = carouselRef.current.offsetWidth;
        setMaxOffset(Math.max(slides.length * STEP - vw, 0));
    }, [slides.length]);

    // clamp to real offset
    const offset = Math.min(current * STEP, maxOffset);

    // edge flags based on actual offset
    const atStart = offset === 0;
    const atEnd = offset === maxOffset;

    return (
        <>
            <div className="page-content">
                <div className={`overview ${animate ? 'show' : ''}`}>
                    <div className="image-container">
                        <img className="fade-item delay-0" src="/img/theatre.jpg" alt="Theatre" />
                        <div className="text-overlay">
                            <h2 className="fade-item delay-1 title">Tech Theatre</h2>
                            <h2 className="fade-item delay-2 title title2">Projects</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondsection">
                <div className="reflection">
                    <div className="reflection-container">
                        <h1
                            className={`reflection-title fade-in-blur ${animate ? 'show' : ''
                                }`}
                        >
                            Personal Reflection Paper
                        </h1>
                        <div
                            className={`description fade-in-blur ${animate ? 'show' : ''
                                } delay-4`}
                        >
                            <p>
                                My reflection on all of the projects in this class and
                                the including all build process details.
                            </p>
                            <Link to="/reflection" className="reflection-button">
                                View Reflection Paper &gt;
                            </Link>
                        </div>

                    </div>
                </div>

                    <div className="sectional">
                        <div
                            className={
                                `carousel 
           ${!atStart ? 'fade-left' : ''} 
           ${!atEnd ? 'fade-right' : ''}`
                            }
                            ref={carouselRef}
                        >
                            <div className={`fade-overlay left ${atStart ? 'hidden' : ''}`} />
                            <div className={`fade-overlay right ${atEnd ? 'hidden' : ''}`} />
                            <div
                                className="carousel-track"
                                style={{ transform: `translateX(-${offset}px)` }}
                            >
                                {slides.map(s => (
                                    <div
                                        key={s.title}
                                        className="section-card"
                                        style={{ width: CARD_W }}
                                    >
                                        <img src={s.img} alt={s.title} />
                                        <div className="text">
                                            <h2 className="section-title">{s.title}</h2>
                                            <button className="expand">+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="nav-buttons">
                                <button className="nav prev" onClick={prev} disabled={atStart}>
                                    ‹
                                </button>
                                <button className="nav next" onClick={next} disabled={atEnd}>
                                    ›
                                </button>
                            </div>
                        </div>
                        {/* -- Centered nav buttons -- */}
                        <div className="nav-buttons">
                            {/* Prev on the left */}
                            <button
                                className="nav prev"
                                onClick={prev}
                                disabled={current === 0}
                                aria-label="Previous"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M15 18l-6-6 6-6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {/* Next on the right */}
                            <button
                                className="nav next"
                                onClick={next}
                                disabled={current === slides.length - 1}
                                aria-label="Next"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M9 6l6 6-6 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </>
            );
}