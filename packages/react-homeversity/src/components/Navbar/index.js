import { Link } from 'react-router-dom';
import './styles.sass'
import LogoHeader from '../../assests/img/logo-header.png'
import Carshop from '../../assests/img/shopcart.png'
const Navbar = (props) => {
    const {routes} = props

    return (
      <div className="navbar">
        <div className="navbar_left">
          <Link  to="/">
            <img className="navbar_left_logo" src={LogoHeader} alt="Logo"/>
          </Link>
          <ul className="navbar_left_list">
              {
                routes.map((el,index)=>{
                    return <li key={index}>
                        <Link className="navbar_left_list_element" to={el.url}>{el.name}</Link>
                    </li>
                })
              }
          </ul>
        </div>
        <div className="navbar_right">
          <img className="navbar_right_carshop" width="100" src={Carshop} alt="Comprar"/>
          <div className="navbar_right_button">Ingresar</div>
        </div>
      </div>
    );
  };
  
  export default Navbar;