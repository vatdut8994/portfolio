import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TechTheatrePage.css';

export default function TechTheatrePage() {
    const [animate, setAnimate] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [isCollapsing, setIsCollapsing] = useState(false);
    const [transformStr, setTransformStr] = useState('');
    // store the expanded card size
    const [expandedSize, setExpandedSize] = useState({ w: 0, h: 0 });
    const [backdropState, setBackdropState] = useState('');

    const isTransitioning = activeCard !== null || isCollapsing;


    useEffect(() => {
        setAnimate(true); // Just trigger directly
    }, []);

    useEffect(() => {
        document.body.style.overflow = (activeCard !== null || isCollapsing) ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [activeCard, isCollapsing]);

    useEffect(() => {
        if (activeCard !== null) {
            setBackdropState('');
            requestAnimationFrame(() => setBackdropState('fade-in'));
        }
    }, [activeCard]);

    useEffect(() => {
        if (isCollapsing) {
            setBackdropState('fade-out');
        }
    }, [isCollapsing]);

    useEffect(() => {
        if (activeCard !== null && !isCollapsing) {
            document.body.classList.add('card-open');
        } else {
            document.body.classList.remove('card-open');
        }
    }, [activeCard, isCollapsing]);

    const slides = [
        { title: 'Lighting and Sound', img: '/img/light-sound.jpg' },
        { title: 'Scenery and Tools', img: '/img/powertool.jpg' },
        { title: 'Painting', img: '/img/paint.jpg' },
        { title: 'Flats', img: '/img/flats.jpg' },
        { title: 'Props', img: '/img/goblet.png' },
    ];

    const CARD_W = 320, CARD_H = 350, GAP = 20;
    const getPosition = i => {
        if (i < 3) return { left: i * (CARD_W + GAP), top: 0 };
        const col = i - 3, offset = (CARD_W + GAP) / 2;
        return { left: offset + col * (CARD_W + GAP), top: CARD_H + GAP };
    };

    const TOP_GAP = 50;  // leave 50px at top

    const handleClick = (i, e) => {
        // collapse case
        if (activeCard === i && !isCollapsing) {
            setIsCollapsing(true);
            setTransformStr('none');
            setExpandedSize({ w: CARD_W, h: CARD_H });
            return;
        }

        // open case
        const node = e.currentTarget;
        const rect = node.getBoundingClientRect();

        // new height is viewport minus gap
        const newH = window.innerHeight - TOP_GAP;
        // width scales proportionally
        const newW = (rect.width * newH) / rect.height;

        // horizontal centering
        const dx = window.innerWidth / 2 - newW / 2 - rect.left;
        // move top to exactly TOP_GAP
        const dy = TOP_GAP - rect.top;

        setExpandedSize({ w: newW, h: newH });
        // only translate, no scale
        setTransformStr(`translate(${dx}px, ${dy}px)`);
        setActiveCard(i);
    };

    const onTransitionEnd = e => {
        if (isCollapsing && e.propertyName === 'transform') {
            setActiveCard(null);
            setIsCollapsing(false);
        }
    };

    return (
        <>
            {(activeCard !== null || isCollapsing) && (
                <div
                    className={`expander-backdrop ${backdropState}`}
                    onClick={() => {
                        if (!isCollapsing) {
                            setIsCollapsing(true);
                            setTransformStr('none');
                        }
                    }}
                />
            )}

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
                    <div style={{
                        position: 'relative',
                        width: '1000px',
                        margin: '0 auto',
                        height: '740px'
                    }}>
                        {slides.map((s, i) => {
                            const isActive = activeCard === i;
                            const isClosing = isActive && isCollapsing;
                            const { left, top } = getPosition(i);

                            return (
                                <div
                                    key={i}
                                    className={`section-card${isActive ? ' expanded' : ''}${isClosing ? ' closing' : ''}${isTransitioning ? ' transitioning' : ''}`}
                                    style={{
                                        position: 'absolute',
                                        left: `${left}px`,
                                        top: `${top}px`,
                                        // use expandedSize when active
                                        width: isActive ? `${expandedSize.w}px` : `${CARD_W}px`,
                                        height: isActive ? `${expandedSize.h}px` : `${CARD_H}px`,
                                        transform: isActive ? transformStr : 'none'
                                    }}
                                    onClick={e => handleClick(i, e)}
                                    onTransitionEnd={onTransitionEnd}
                                >
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        style={{
                                            height: isActive ? `${expandedSize.h * 0.7}px` : `${CARD_H * 0.7}px`,
                                            width: 'auto',
                                            transition: 'height 0.3s ease'
                                        }}
                                    />

                                    <button
                                        className="close-card"
                                        onClick={() => {
                                            if (!isCollapsing) {
                                                setIsCollapsing(true);
                                                setTransformStr('none');
                                            }
                                        }}
                                    >
                                        ×
                                    </button>

                                    <div className="text">
                                        <h2 className="section-title">{s.title}</h2>
                                        <button className="expand">+</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
