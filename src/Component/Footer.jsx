import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../Style/Footer.css';

const Footer = () => {
  return (
    
      <div className="container text-center py-5 text-body ">
         <span className="Sims-text d-block mb-2">
          By Awang Darmawan 
        </span>
        <span className="Sims-text d-block mb-2">
          © 2025 SIMS PPBO.All rights reserved.
        </span>
       
        <div className="  gap-4 ">
          <a
            href="https://wa.me/6283125307355"
            className="Wa-text footer-Wa d-flex justify-content-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            <span className="ms-2">+6283125307355</span>
          </a>
          <a
            href="https://www.instagram.com/awng_drmwn"
            
            className="Ig-text  footer-Ig footer-icon d-flex justify-content-center"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <span className="ms-2">@awang_drmwn</span>
          </a>
        </div>
      </div>
    
  );
};

export default Footer;
