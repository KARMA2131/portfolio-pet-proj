import { NavLink } from 'react-router-dom';

import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

 export default function Navbar() {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to='/' className="logo"><strong>Front_end</strong>Portfolio</NavLink>

                <ul class="nav-list">
                    <li> <NavLink to='/'         className={({isActive}) =>  isActive ? activeLink : normalLink} >Home</NavLink></li>
                    <li> <NavLink to='/projects' className={({isActive}) =>  isActive ? activeLink : normalLink} >Projects</NavLink></li>
                    <li> <NavLink to='/contacts' className={({isActive}) =>  isActive ? activeLink : normalLink} >Contacts</NavLink></li>
                </ul>

                <BtnDarkMode />

            </div>
        </div>
    </nav>
  )};