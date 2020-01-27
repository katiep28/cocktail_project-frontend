import React from 'react';
import Modal from 'react-awesome-modal';
import './DisplayPopup.css';

class DisplayPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    closeModal() {
        this.props.resetVariablesFunc();
    }

    render() {
        return (
            <section>
                <Modal visible={this.props.display} width="900px" height="400px" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    
                    <div className="feature-wrapper2 bg-white">
                        <span style={{color: "white"}}>  
                            <img src={this.props.image} alt="cocktail" width="100px" height="100px"/>
                        </span>
                        <h2>Recipe For: {this.props.cocktailName}</h2>
                        <h3>{this.props.recipe}</h3>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
            
        );
    }
}








export default DisplayPopup;