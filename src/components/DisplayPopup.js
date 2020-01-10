import React from 'react';
import Modal from 'react-awesome-modal';


class DisplayPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: "open"
        }
    }

    // componentDidMount() {
    //     //Make async request to get data
    //     console.log("in display popup did mount");
    //     console.log(this.props.display);

    //     this.setState({
    //         visible: this.props.display
    //     });

    //   };


    openModal() {
        this.setState({
            visible: "open"
        });


    }

    closeModal() {
        this.setState({
            visible: "close"
    
        });
        
    }

    render() {
    
        let display = this.props.display;

            if (this.state.visible === "close") {
                display = false;

                // this.openModal();
                // console.log("In display popup setting it to false");
            
            }
            console.log("props value  " + this.props.display)
            console.log("Display value   " + display);
           

      
        return (
            <section>
                
                {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
                {/* <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}> */}
                <Modal visible={display} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
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