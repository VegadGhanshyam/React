import './MainNavigation.css'
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className='header'>
      <div className='logo'>Quotes of the Day</div>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to="/quotes" activeclassname='active'>
              All Quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quotes" activeclassname='active'>
              Add New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
