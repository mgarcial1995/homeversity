import './styles.sass'
import facebook from '../../assets/img/facebook-icon.png'
import instagram from '../../assets/img/instagram-icon.png'
import twitter from '../../assets/img/twitter-icon.png'
import youtube from '../../assets/img/youtube-icon.png'
import LogoFooter from '../../assets/img/logo-footer.png'
const Footer = () => {
    return (
      <div className="footer">
        <div className="footer_terms">
          <p>Terminos y condiciones</p>
          <p>Preguntas Frecuentes</p>
          <p>Libro de reclamaciones</p>
          <div className="footer_terms_social">
            <p>Contáctanos en</p>
            <div className="footer_terms_social_icons">
              <a href="https://www.facebook.com/">
                  <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
                  <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://twitter.com/">
                  <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://www.youtube.com/">
                  <img src={youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_copy">
          <img src={LogoFooter} alt="Logo" />
          <p>Copyright © Homeversity 2021 - Todos los derechos reservados</p>
        </div>
      </div>
    );
  };
  
  export default Footer;