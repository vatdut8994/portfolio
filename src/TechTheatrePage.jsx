import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TechTheatrePage.css';

export default function TechTheatrePage() {
    const [animate, setAnimate] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [isCollapsing, setIsCollapsing] = useState(false);
    const [transformStr, setTransformStr] = useState('');
    const [expandedSize, setExpandedSize] = useState({ w: 0, h: 0 });
    const [backdropState, setBackdropState] = useState('');

    const isTransitioning = activeCard !== null || isCollapsing;
    const CARD_W = 320, CARD_H = 350, GAP = 20, TOP_GAP = 50;

    const slides = [
        {
            title: 'Lighting and Sound',
            img: '/img/light-sound.jpg',
            body: [
                <>
                    <div className="twoinone">
                        <div>
                            <div className='overlay-title'>
                                Lighting Textbook
                                <p>In this assignment, we used lighting vocabulary to create a photo textbook showing each term in its real theatre context. Each picture included the item’s name, description, and use.</p>

                            </div>
                            <img
                                src="/img/soundboard.jpeg"
                                alt="Soundboard"
                                style={{
                                    width: expandedSize.w
                                        ? `${expandedSize.w / 2 - 100}px`
                                        : `${CARD_W / 2 - 100}px`,
                                }}

                            />
                        </div>
                        <hr />
                        <div>
                            <div className='overlay-title'>
                                Lighting and Shadows
                                <p>In this assignment, we created six original lighting looks using Front, Back, Top, and Side positions with added gobos or gels. Each look was labeled, totaling 10 pictures.</p>
                            </div>
                            <img src="/img/matthew.jpeg" alt="Matthew Lighting" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                    </div>
                    <div className="text-img soundlight">
                        <div className='overlay-title'>
                            Sound And Lighting
                            <p>In this group assignment, we interpreted a painting with a song using virtual lighting on the Matt Kizer website. Four members presented, while two ran light and sound cues using a cue sheet.</p>
                        </div>
                        {/* <img src="/img/minecraft.png" alt="minecraft" /> */}
                    </div>
                    <div className="overlay-title final-learned">
                        What I learned?
                        <p><strong>ERS (Ellipsoidal Reflector Spotlight):</strong> The ERS is a spotlight that gives a sharp, focused beam of light. It usually hangs from the catwalk or above the stage and is great for lighting specific people or places. You can add a gobo, a metal stencil, to make shapes or patterns with the light. You can also add a gel, a colored plastic sheet, to change the color. These tools help set the mood and make the stage more interesting.</p>
                        <p><strong>Using the Lighting Board and Cues:</strong> The lighting board controls all the lights on stage. You can use it to turn lights on or off, change colors, and create cues—planned lighting changes that happen during the show. For example, you can set a cue to slowly fade the lights to black or change colors on the Cyc. You can even build lighting looks on a screen before using them on stage, which helps plan the mood of each scene.</p>
                        <p><strong>Lighting Positions and Effects:</strong> Where you place the lights makes a big difference. <em>Front light</em> makes people easy to see but can look flat. <em>Side light</em> adds shape and makes faces and bodies look more three-dimensional. <em>Top light</em> creates shadows under the body and gives a dramatic feel. <em>Back light</em> helps separate the person from the background and makes a glowing outline. Using colors with these positions helps set different moods.</p>
                        <p><strong>Gobos and Gels:</strong> A <em>gobo</em> is a metal shape that you put inside an ERS to make light patterns like trees or windows. A <em>gel</em> is a colored plastic sheet that changes the color of the light. Using both together, you can change how the scene looks and feels. For example, you can use a blue gel and a leaf gobo to make a night forest scene.</p>
                        <p><strong>Painting Techniques for Scenery:</strong> There are different ways to paint sets. <em>Dry brushing</em> uses a small amount of paint on a dry brush to make things look old or rough. <em>Scumbling</em> blends two or more colors using X or swirly brush strokes to create texture. <em>Rag rolling</em> uses a rolled-up rag to press color onto the surface. <em>Washes</em> are watery paint layers (about 1 part paint to 3 parts water) that add soft shadows or color. These techniques help make the scenery look real.</p>

                    </div>
                </>
            ]
        },
        {
            title: 'Scenery and Tools',
            img: '/img/powertool.jpg',
            body: [
                <>
                    <div className="twoinone">
                        <div>
                            <div className="overlay-title">
                                Birdhouse
                                <p>In this assignment, we planned, sketched (in pencil and color), and built a birdhouse from our own design. It was assembled using wood glue and a pneumatic staple gun.</p>
                            </div>
                            <img src="/img/birdhouse.jpeg" alt="Birdhouse Picture" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                        <hr />
                        <div>
                            <div className="overlay-title">
                                Tool Museum
                                <p>In this assignment, we took pictures of ourselves properly using various tools, following specific usage guidelines. Each photo was labeled and clearly displayed on slides.</p>
                            </div>
                            <img src="/img/drill.jpeg" alt="Tool Usage" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                    </div>
                    <div className="overlay-title final-learned">
                        What I learned?
                        <p><strong>Speed Square and Framing Square:</strong> A speed square is a small triangular tool that helps measure lengths and mark both 90-degree and 45-degree angles, which is great for cutting or lining up wood. A framing square is larger and is used to measure and mark perfect 90-degree angles, especially useful when connecting two pieces of wood at a right angle.</p>

                        <p><strong>Using a Pneumatic Staple Gun:</strong> The pneumatic staple gun uses air pressure to fire staples into wood quickly. I learned how to hold it safely with both hands and how to load the staples into the magazine correctly. It’s important to keep the gun pressed flat against the surface and aim away from your body.</p>

                        <p><strong>Power Drill Basics:</strong> I learned how to properly hold and control a power drill. It has a forward and reverse switch for putting screws in or taking them out. I also learned about adjusting the torque (for how strong it drills) and the speed settings depending on the material I’m drilling into.</p>

                        <p><strong>Different Types of Clamps:</strong> I learned the differences between three clamps: a bar clamp, which is good for holding large pieces together; a spring clamp, which is quick and easy for smaller parts; and a quick grip, which can be tightened with one hand. I also learned how to adjust each one to keep wood pieces steady.</p>

                        <p><strong>Building and Measuring for a Project:</strong> I used wood glue and the staple gun together to build a strong base and birdhouse. I also learned how to measure small pieces accurately and how to safely cut them using a chop saw, making sure to line up the wood and keep my hands at a safe distance.</p>

                    </div>
                </>
            ]
        },
        {
            title: 'Painting',
            img: '/img/paint.jpg',
            body: [
                <>
                    <div className="twoinone">
                        <div>
                            <div className="overlay-title">
                                Faux Brick and Graffiti
                                <p>We had to replicate the natural appearance of a brick wall and paint it with graffiti of our initials and added texture with the spatter technique.</p>
                            </div>
                            <img src="/img/brickwall.jpeg" alt="Faux Brick" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                        <hr />
                        <div>
                            <div className="overlay-title">
                                Faux Granite
                                <p>In this piece, we had to replicate the appearance of granite rock, adding depth and texture with shadows and highlights.</p>
                            </div>
                            <img src="/img/granite.jpeg" alt="Faux Granite" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                    </div>

                    <div className="twoinone">
                        <div>
                            <div className="overlay-title">
                                Faux Plaster Peel
                                <p>We had to add wood texture with paint, imitating the look of wooden planks, then covered it with paint around a spot to look like plaster peeling off.</p>
                            </div>
                            <img src="/img/plaster.jpeg" alt="Faux Brickwall" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                        <hr />
                        <div>
                            <div className="overlay-title">
                                Faux Rocks
                                <p>In this piece, we had to replicate the appearance of granite rock, adding depth and texture with shadows and highlights.</p>
                            </div>
                            <img src="/img/stones.jpeg" alt="Faux Rocks" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                    </div>
                    <div className="overlay-title final-learned">
                        What I learned?
                        <p><strong>Scumble Technique:</strong> Scumbling is a painting method where you blend two different shades of paint together with light brush strokes to create depth and texture. First, you paint a base color. Then, using a dry brush and a second color, you gently brush in swirly or cross-hatch strokes. This makes the surface look more natural and layered, especially in backgrounds.</p>

                        <p><strong>Spatter Technique:</strong> Spatter is used to create small dots or grainy texture by flicking paint from a brush onto the surface. You dip the brush into paint, hold it above the canvas, and tap or flick it so little spots land randomly. This works well for making things like dirt, stars, or rough surfaces.</p>

                        <p><strong>Wash Technique:</strong> A wash is a thin layer of watery paint that adds soft color or shadows. You mix about 90% water and 10% paint and brush it across the surface. This helps create highlights, shadows, or lighting effects that look like natural shading or sunlight.</p>

                        <p><strong>Base Coat Importance:</strong> The base coat is the first solid color you paint on a surface. It gives a clean, even starting point for adding other layers and effects. A good base helps the other techniques like scumble, splatter, or dry brushing show up better and last longer.</p>

                        <p><strong>Dry Brushing Technique:</strong> Dry brushing adds texture and highlights. You dip just the tips of the brush into paint, then dab most of it off on a towel so only a little paint is left. Then you lightly drag or tap the brush across the canvas. This leaves a scratchy, faded look that works well for wood, stone, or adding shine.</p>
                    </div>
                </>
            ]
        },
        {
            title: 'Flats',
            img: '/img/flats.jpg',
            body: [
                <>
                    <div className="text-img finalset">
                        <div className="overlay-title">
                            Flats and Final Paint/Set
                            <p>In these assignments, we built Hollywood-style flats by measuring, cutting, and assembling Stiles, Toggles, and Rails. Each person made a flat with a partner, then created a window flat together, all based on planned drawings and a table theme.</p>
                        </div>
                        <img src="/img/finalset.JPG" alt="Final Set" style={{
                            width: expandedSize.w
                                ? `${expandedSize.w - 100}px`
                                : `${CARD_W - 100}px`,
                        }} />
                    </div>
                    <div className="overlay-title final-learned">
                        What I learned?
                        <p><strong>Team Collaboration and Brainstorming:</strong> I learned how to work closely with my team by sharing ideas and listening to others. We made sure everyone agreed on the final plan and felt excited to bring it to life. This helped us stay creative and work together better.</p>

                        <p><strong>Measuring and Cutting Wood Pieces:</strong> I learned how to measure and cut the wood for parts like stiles, toggles, and rails. I used a measuring tape to mark each length, then cut the pieces with a chop saw. I made sure to switch sides as I cut to keep all pieces equal and even.</p>

                        <p><strong>Using Paint Techniques in a Design:</strong> I combined the painting techniques I learned—like scumble and splatter—to create a design. Scumble helped add blended color depth in the background, while splatter added texture and interest to the final piece.</p>

                        <p><strong>Adding Highlights and Shadows:</strong> I learned how to mix lighter and darker shades of my paint colors and turn them into washes. I used the light washes for highlights and darker ones for shadows to make the painting look more 3D and realistic.</p>

                        <p><strong>Using Colored Lights for Visual Effect:</strong> On our set, I used colored lights to match and contrast with the colors in our painting. Some lights matched our paint colors to make them pop, while others used opposite colors to create a more vibrant and interesting effect.</p>
                    </div>
                </>
            ]
        },
        {
            title: 'Props',
            img: '/img/goblet.png',
            body: [
                <>
                    <div className="twoinone">
                        <div>
                            <div className="overlay-title">
                                Hobbit House
                                <p>In this assignment, we built a scale model hobbit house using skills we had learned. Materials included Luan wood, an oatmeal container, packing paper, masking tape, glue, and other available supplies.</p>
                            </div>
                            <img src="/img/hobbit.jpeg" alt="Hobbit House" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                        <hr />
                        <div>
                            <div className="overlay-title">
                                Six Goblet - Jane Seymore
                                <p>In this assignment, we created a goblet inspired by one of the six wives from Six, using all materials provided and any others we could find. The final goblet had to be transformed so none of the original materials were recognizable.</p>
                            </div>
                            <img src="/img/goblet.jpeg" alt="Six Goblet" style={{
                                width: expandedSize.w
                                    ? `${expandedSize.w / 2 - 100}px`
                                    : `${CARD_W / 2 - 100}px`,
                            }} />
                        </div>
                    </div>
                    <div className="overlay-title final-learned">
                        What I learned?
                        <p><strong>Learning Paper Mâché Basics:</strong> I learned how to make a shape using masking tape as the base form, then covered it with ripped paper and liquid glue. By layering the glue-soaked paper around the taped shape, I created a strong and smooth surface that could later be painted or decorated.</p>

                        <p><strong>Using Wood Putty for Texture:</strong> I learned to add wood-like texture to my project by applying wood putty over the paper mâché surface. Using a fork, I carved grooves and ridges into the putty to make it look like natural wood grain before it dried.</p>

                        <p><strong>Creating Grass and Moss with Sawdust:</strong> I learned how to make fake grass or moss by first painting the surface of the Luan green. Then I sprinkled sawdust over the wet paint so it would stick. After it dried a bit, I added more green paint on top to give it a mossy, textured effect.</p>

                        <p><strong>Shaping with Chicken Wire:</strong> I used chicken wire to build a strong frame inside a structure, especially for shapes that needed extra support, like a nose. After shaping the wire inside the oatmeal container, I added masking tape and followed the paper mâché steps to create a solid and detailed form.</p>

                        <p><strong>Building a Detachable Hat:</strong> I made a hat by cutting another oatmeal container to fit on top of the head structure. I added cardboard around the edge to form the brim, then cut a dip in the top for shape. Finally, I covered it in paper mâché and painted it to match the project.</p>
                    </div>
                </>
            ]
        },
    ];


    const getPosition = i => {
        if (i < 3) return { left: i * (CARD_W + GAP), top: 0 };
        const col = i - 3, offset = (CARD_W + GAP) / 2;
        return { left: offset + col * (CARD_W + GAP), top: CARD_H + GAP };
    };

    useEffect(() => setAnimate(true), []);
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

    useEffect(() => { if (isCollapsing) setBackdropState('fade-out'); }, [isCollapsing]);

    useEffect(() => {
        document.body.classList.toggle('card-open', activeCard !== null && !isCollapsing);
    }, [activeCard, isCollapsing]);

    // ONLY opens when no card is active; never collapses here
    const handleCardClick = (i, e) => {
        if (activeCard !== null) return;        // do nothing if already open
        const rect = e.currentTarget.getBoundingClientRect();
        const newH = window.innerHeight - TOP_GAP;
        const newW = rect.width * newH / rect.height;
        const dx = window.innerWidth / 2 - newW / 2 - rect.left;
        const dy = TOP_GAP - rect.top;

        setExpandedSize({ w: newW, h: newH });
        setTransformStr(`translate(${dx}px, ${dy}px)`);
        setActiveCard(i);
    };

    const collapse = () => {
        if (activeCard === null || isCollapsing) return;
        setIsCollapsing(true);
        setTransformStr('none');
        setExpandedSize({ w: CARD_W, h: CARD_H });
    };

    const onTransitionEnd = e => {
        if (isCollapsing && e.propertyName === 'transform') {
            setActiveCard(null);
            setIsCollapsing(false);
        }
    };

    return (
        <>
            {/* BACKDROP: clicking it collapses */}
            {(activeCard !== null || isCollapsing) && (
                <div
                    className={`expander-backdrop ${backdropState}`}
                    onClick={collapse}
                />
            )}

            {/* HERO SECTION (unchanged) */}
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

            {/* REFLECTION LINK (unchanged) */}
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
                {/* PROJECT CARDS */}
                <div className="sectional">
                    <div style={{ position: 'relative', width: '1000px', margin: '0 auto', height: '740px' }}>
                        {slides.map((s, i) => {
                            const isActive = activeCard === i;
                            const isClosing = isActive && isCollapsing;
                            const { left, top } = getPosition(i);

                            return (
                                <div
                                    key={i}
                                    className={
                                        `section-card` +
                                        (isActive ? ' expanded' : '') +
                                        (isClosing ? ' closing' : '') +
                                        (isTransitioning ? ' transitioning' : '')
                                    }
                                    style={{
                                        position: 'absolute',
                                        left: `${left}px`,
                                        top: `${top}px`,
                                        width: isActive ? `${expandedSize.w}px` : `${CARD_W}px`,
                                        height: isActive ? `${expandedSize.h}px` : `${CARD_H}px`,
                                        transform: isActive ? transformStr : 'none'
                                    }}
                                    onClick={e => handleCardClick(i, e)}
                                    onTransitionEnd={onTransitionEnd}
                                >

                                    {/* STATIC INNER */}
                                    <div className="card-inner">
                                        <img
                                            src={s.img}
                                            alt={s.title}
                                            style={{
                                                height: isActive ? `${expandedSize.h * 0.7}px` : `${CARD_H * 0.7}px`,
                                                width: 'auto',
                                                transition: 'height 0.3s ease'
                                            }}
                                        />

                                        {/* CROSS BUTTON: clicking it collapses */}
                                        <button
                                            className="close-card"
                                            onClick={e => { e.stopPropagation(); collapse(); }}
                                        >×</button>

                                        <div className="text">
                                            <h2 className="section-title">{s.title}</h2>
                                            <button className="expand">+</button>
                                        </div>
                                    </div>

                                    {/* CONDITIONAL BODY */}
                                    {isActive && (
                                        <div className="card-body fade-item delay-1">
                                            {React.Children.toArray(s.body).map((node, idx) => (
                                                <div key={idx}>
                                                    {node}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
