import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TechTheatrePage.css';

export default function TechTheatrePage() {
    const [animate, setAnimate] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [isCollapsing, setIsCollapsing] = useState(false);
    const [transformStr, setTransformStr] = useState('');
    const [backdropState, setBackdropState] = useState(''); // '', 'fade-in', 'fade-out'

    useEffect(() => {
        setAnimate(false);
        const id = setTimeout(() => setAnimate(true), 20);
        return () => clearTimeout(id);
    }, []);

    useEffect(() => {
        // lock scroll whenever a card is open or in the middle of closing
        if (activeCard !== null || isCollapsing) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeCard, isCollapsing]);


    // when a card opens, mount backdrop at 0→fade-in
    useEffect(() => {
        if (activeCard !== null) {
            setBackdropState('');
            requestAnimationFrame(() => setBackdropState('fade-in'));
        }
    }, [activeCard]);

    // when collapse begins, trigger fade-out
    useEffect(() => {
        if (isCollapsing) {
            setBackdropState('fade-out');
        }
    }, [isCollapsing]);

    useEffect(() => {
        // hide nav only while a card is fully expanded (not during collapse)
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

    const handleClick = (i, e) => {
        if (activeCard === i && !isCollapsing) {
            // start collapse
            setIsCollapsing(true);
            setTransformStr('none');
            return;
        }

        // open
        const node = e.currentTarget;
        node.scrollIntoView({ block: 'center', behavior: 'auto' });
        const rect = node.getBoundingClientRect();

        const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
        const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);
        const scale = window.innerHeight / rect.height;

        setTransformStr(`translate(${dx}px, ${dy}px) scale(${scale})`);
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
            {/* Backdrop */}
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

            {/* Hero */}
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

            {/* Reflection Section */}
            <div className="secondsection">
                <div className="reflection">
                    <div className="reflection-container">
                        <h1 className={`reflection-title fade-in-blur ${animate ? 'show' : ''}`}>
                            Personal Reflection Paper
                        </h1>
                        <div className={`description fade-in-blur ${animate ? 'show' : ''} delay-4`}>
                            <p>
                                My reflection on all of the projects in this class and the build‑process details.
                            </p>
                            <Link to="/reflection" className="reflection-button">
                                View Reflection Paper &gt;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cards Carousel */}
                <div className="sectional">
                    <div style={{ position: 'relative', width: '1000px', margin: '0 auto', height: '740px' }}>
                        {slides.map((s, i) => {
                            const isActive = activeCard === i;
                            const isClosing   = isActive && isCollapsing;
                            const { left, top } = getPosition(i);
                            return (
                                <div
                                    key={i}
                                    className={`section-card${isActive ? ' expanded' : ''}${isClosing ? ' closing' : ''}`}
                                    style={{
                                        position: 'absolute',
                                        left: `${left}px`,
                                        top: `${top}px`,
                                        width: `${CARD_W}px`,
                                        height: `${CARD_H}px`,
                                        transform: isActive ? transformStr : 'none'
                                    }}
                                    onClick={e => handleClick(i, e)}
                                    onTransitionEnd={onTransitionEnd}
                                >
                                    <img src={s.img} alt={s.title} />
                                    <div className="text">
                                        <h2 className="section-title">{s.title}</h2>
                                        {!isActive && <button className="expand">+</button>}
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
