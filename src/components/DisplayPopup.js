import React from 'react';
import Modal from 'react-awesome-modal';


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
                <Modal visible={this.props.display} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                        <h1>To Make a: {this.props.cocktailName}</h1>
                        <p>{this.props.recipe}</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default DisplayPopup;