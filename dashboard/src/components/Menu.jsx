import { useState } from "react";
import { Link } from "react-router-dom";
import './Menu.css';

const menuItems = [
  { label: "Dashboard", to: "/", index: 0 },
  { label: "Orders", to: "/orders", index: 1 },
  { label: "Holdings", to: "/holdings", index: 2 },
  { label: "Positions", to: "/positions", index: 3 },
  { label: "Funds", to: "/funds", index: 4 },
  { label: "Apps", to: "/apps", index: 6 },
];

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); 
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Company Logo" />
      
      {/* Desktop menu */}
      <div className="desktop-menu">
        <ul>
          {menuItems.map(({ label, to, index }) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={to}
                onClick={() => handleMenuClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu toggle and profile */}
      <div className="right-section">
        <div className="profile-section" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map(({ label, to, index }) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={to}
                onClick={() => handleMenuClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
