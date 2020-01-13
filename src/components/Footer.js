import React from "react";
// import logo from '../images/white tippl logo.png';
import logo from '../images/tippl_300_x_300.png';
import photo from '../images/cocktail_summer.jpg';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <footer className="page-footer font-small cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-3">
                            <div className="mb-5 flex-center">
                             
                                <div className="ins-ic">
                                    <a href="https://www.instagram.com/tipplapp/" target="_blank">
                                        {/* <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-3x"> </i></a> */}
                                        <img src={logo} width="150" alt="" className="align-middle mr-2" fluid />
                                        </a>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center text-uppercase py-3">© 2019
                <span> 
                      <a href="https://mdbootstrap.com/education/bootstrap/"  style={{color: "black"}}> Tippl.com</a>
                      </span>
                </div>
            </footer>

        );
    }
}

export default Footer;