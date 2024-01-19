import "./Header.css";
import Logo from "../../../public/logoHooking.svg";


export const Header = () => {
  return (
    
      <nav className="nav">
        <a href="#" className="siteTitle">
          <img src={Logo} alt="" />
        </a>
        <button className="headerBtn">Mis Reservas</button>
      </nav>
    
  );
};

export default Header;
