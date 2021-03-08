import React from 'react';
import { Nav, NavItem, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import firebase from '../firebase';
import Trailiologo from '../assets/logo.svg';
import '../App.css';


const tabs = [{
  route: "/record",
  icon: faHome,
  label: "Record"
},{
  route: "/diary",
  icon: faHome,
  label: "Diary"
}
// },{
//   route: "/maintenance",
//   icon: faHome,
//   label: "Maintenance"
// },{
//   route: "/notes",
//   icon: faSearch,
//   label: "Notes"
// },{
//   route: "/spots",
//   icon: faUserCircle,
//   label: "Spots"
// }
]

const Navigation = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Trailiologo} alt="Logo" />
            </a>
            <Nav className="#">
              <NavItem>
                <NavLink to="/record" className="desktop-nav">
                  Record
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/diary" className="desktop-nav">
                  Diary
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="/maintenance" className="nav-link">
                  Maintenance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/notes" className="nav-link">
                  Notes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/spots" className="nav-link">
                  Spots
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink to="/login" className="desktop-nav">
                <Button onClick={() => firebase.auth().signOut()}>
               Log out
            </Button>
                </NavLink>
        
              </NavItem>
            </Nav>
        </div>
      </nav>
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;