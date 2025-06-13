import './AboutPage.css';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className="about-page">
            <h1>About Me</h1>
            <p>This is under construction. For the portfolio, the required about-me blurb is provided in the <Link to="/" className="reflection-button">
                                            home page
                                        </Link></p>
            {/* <div className="pfp">
                <img src="img/profile_picture.png" alt="Profile Picture" />
            </div> */}
        </div>
    );
}
