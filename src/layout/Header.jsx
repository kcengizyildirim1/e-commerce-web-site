import { NavLink } from "react-router-dom";
import Dropdown from "../components/navbar/Dropdown";

const Header = () => {
  return (
    <header className="flex flex-col font-['Montserrat']">
      <div className="p-5 bg-[#252B42] text-white ">
        <div className="flex justify-between flex-wrap ">
          <h6>
            <i className="fa-solid fa-phone mr-3"></i>
            (225) 555-0118
          </h6>
          <h6>
            <i className="fa-regular fa-envelope mr-3 mt-2"></i>
            michelle.rivera@example.com
          </h6>
          <h6>Follow Us and get a chance to win 80% off</h6>

          <div className="flex gap-4 justify-center">
            <h6>Follow Us : </h6>
            <h6>
              <i className="fa-brands fa-instagram"></i>
            </h6>
            <h6>
              <i className="fa-brands fa-youtube"></i>
            </h6>
            <h6>
              <i className="fa-brands fa-facebook"></i>
            </h6>
            <h6>
              <i className="fa-brands fa-twitter"></i>
            </h6>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-6 px-8 flex-wrap">
        <div className="flex gap-[5rem]">
          <h1>Brand Name</h1>
          <nav className="flex gap-5 flex-wrap">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/productlist">
              <Dropdown />
            </NavLink>
            <NavLink to="#">About</NavLink>
            <NavLink to="#">Blog</NavLink>
            <NavLink to="#">Contact</NavLink>
            <NavLink to="#">Pages</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <span>
            <i className="fa-regular fa-user mx-2"></i>Login
          </span>
          <span>/</span>
          <span>Register</span>
          <i className="fa-solid fa-search"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
