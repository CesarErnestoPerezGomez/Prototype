import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function CustomFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h5 className="footer-title">Company</h5>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-title">Help Center</h5>
          <ul className="footer-links">
            <li><a href="/discord">Discord Server</a></li>
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h5 className="footer-title">Legal</h5>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/licensing">Licensing</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-title">Download</h5>
          <ul className="footer-links">
            <li><a href="/ios">iOS</a></li>
            <li><a href="/android">Android</a></li>
          </ul>
        </div>
        
        
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={"/pics/Black White Simple House Logo.svg"} alt="Company Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://facebook.com"><BsFacebook /></a>
          <a href="https://instagram.com"><BsInstagram /></a>
          <a href="https://twitter.com"><BsTwitter /></a>
          <a href="https://github.com"><BsGithub /></a>
          <a href="https://dribbble.com"><BsDribbble /></a>
        </div>
                <p>&copy; 2024 House™. All Rights Reserved.</p>

        
      </div>

      <img src={"https://www.zillowstatic.com/s3/pfs/static/footer-art.svg"} alt="Company Logo" />

    </footer>
    
  );

}

export default CustomFooter;