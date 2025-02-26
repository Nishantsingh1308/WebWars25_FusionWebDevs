import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container" style={{ paddingTop: '80px' }}>
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        <li><strong>What is the format of ICCSAI 2025?</strong></li>
        <li><strong>How can I submit a paper or proposal for the conference?</strong></li>
        <li><strong>Are there any student discounts available for registration?</strong></li>
        <li><strong>Will the conference sessions be recorded?</strong></li>
      </ul>
      
      <h2>Contact Us</h2>
      <p>For inquiries, sponsorship opportunities, or speaker submissions, reach out to us:</p>
      <p>Email: <a href="mailto:contact@iccsai2025.com">contact@iccsai2025.com</a></p>
      <p>Phone: +1 (555) 123-4567</p>
      <p>Address: 123 Conference Ave, Tech City, TC 12345</p>
      
      <h2>Follow us on social media:</h2>
      <ul className="social-links">
        <li><a href="#">Twitter</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
    </div>
  );
};

export default Contact;
