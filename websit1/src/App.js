import React, { useState, useEffect } from "react";
import "./Nav.css"; // Import your styles

const App = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  useEffect(() => {
    if (subscribed) {
      alert("Thank you for subscribing!");
      setSubscribed(false);
    }
  }, [subscribed]);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>Perry Shop</h1>
        </div>
        <ul className="menu">
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="">New Arrivals</a>
          </li>
          <li>
            <a href="">Fashion</a>
          </li>
          <li>
            <a href="firstpro.html">Account</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <h1>New Arrivals for Men & Women</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
          sequi possimus <br />
          consequatur omnis aliquid explicabo beatae illum, non molestiae amet
          veniam, facilis esse aliquam perspiciatis tenetur deleniti
          consequuntur! Quas!
        </p>
        <button className="animated-btn">
          <a href="#hh">Shop Now</a>
        </button>
      </section>

      <h1 className="pheading"></h1>

      <section className="sec">
        <h1 className="kkk" id="hh">
          WELCOME TO MY STORE
        </h1>
        <div className="products">
          {Array.from({ length: 18 }).map((_, index) => (
            <div className="card" key={index}>
              <div className="img">
                <img src={`imag${index + 1}.jpeg`} alt={`product-${index + 1}`} />
              </div>
              <div className="desc">Description</div>
              <div className="title">Title</div>
              <div className="box">
                <div className="price">Price</div>
                <button className="animated-btn">
                  <a href="">Buy Now</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+123456789">+1 234 567 89</a>
          </p>
          <p>Address: 1234 Street Name, City, Country</p>
          <div className="social-icons">
            <a href="#" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates:</p>
          <form onSubmit={handleSubscription}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="animated-btn">
              Subscribe
            </button>
          </form>
        </div>

        <div className="about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best services and experiences to
            our customers. Follow us on social media for more updates and
            offers.
          </p>
        </div>

        <div className="copyright">
          <p>© 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
