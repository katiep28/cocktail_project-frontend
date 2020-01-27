import React from 'react';
import logo from '../images/white tippl logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-custom navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand navbar-custom navbar-text" alt="Responsive image">

                        <img src={logo} width="150" alt="" className="d-inline-block align-middle mr-2" fluid />

                    </a>

                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#" className="nav-link">HOME <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a href="#" className="nav-link">RECIPES</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">FAVOURITES</a></li>
                        </ul>
                    </div>

                    <div className="mb-5 flex-center">
                        {/* <div className="ins-ic"> */}
                            <a href="https://www.instagram.com/tipplapp/" target="_blank">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-3x"> </i></a>
                        {/* </div> */}
                    </div>
                </div>
                {/* <Greet />  */}
            </nav>
        );
    }
}

export default Header;

