import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="home">
            <div className="home__content">
                <h3 className="home__powered">Powered by IEEE Computer Society</h3>
                <h1 className="home__title">Welcome to <span>ICCSAI 2025</span></h1>
                <p className="home__description">
                    The International Conference on AI, Security, and Communication (ICCSAI 2025) 
                    brings together leading researchers, industry experts, and academics to discuss 
                    groundbreaking advancements in artificial intelligence, cybersecurity, and modern 
                    communication technologies.
                </p>
                <div className="home__buttons">
                    <button onClick={() => navigate('/about')} className="home__btn">Learn More</button>
                    <button onClick={() => navigate('/register')} className="home__btn">Register</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
