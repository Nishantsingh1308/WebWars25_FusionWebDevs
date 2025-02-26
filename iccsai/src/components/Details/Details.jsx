import "./details.css";
import { useState, useEffect } from "react";

const Details = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("April 4, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;
    
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="details-container">
      <h1>Conference Details</h1>
      <section className="event-info">
        <h2>Event Information</h2>
        <p><strong>Date:</strong> 4th - 6th April 2025</p>
        <p><strong>Location:</strong> Galgotias University</p>
        <p><strong>Format:</strong> Hybrid (In-person + Virtual Sessions)</p>
      </section>
      
      <section className="countdown">
        <h2>Countdown</h2>
        <p className="timer">
          {timeLeft.days} days {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </p>
      </section>
      
      <section className="topics">
        <h2>Topics Covered</h2>
        <ul>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Cybersecurity & Data Privacy</li>
          <li>Advanced Networking & Communication Systems</li>
          <li>Ethical AI & Policy Regulations</li>
          <li>Quantum Computing & Future Technologies</li>
          <li>IoT & Smart Cities</li>
          <li>Blockchain & FinTech Innovations</li>
          <li>Big Data & Data Analytics</li>
          <li>Robotics & Automation</li>
          <li>And Many More...</li>
        </ul>
      </section>
    </div>
  );
};

export default Details;