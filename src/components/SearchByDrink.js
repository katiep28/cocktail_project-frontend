import React from "react";
import "./SearchByDrink.css";

class SearchByDrink extends React.Component {
    state = {
        newDrink1: "",
        newDrink2: "",
        newDrink3: ""

    }

    updateDrink1 = (event) => {
        this.setState({
            newDrink1: event.target.value
        })
    }

    updateDrink2 = (event) => {
        this.setState({
            newDrink2: event.target.value
        })
    }

    updateDrink3 = (event) => {
        this.setState({
            newDrink3: event.target.value
        })
    }

    handleClick = () => {

        let tempDrink1 = "";
        let tempDrink2 = "";
        let tempDrink3 = "";

        // Check if values have been entered for the 3 drinks if not assign them the value empty
        if (this.state.newDrink1 === "") {
            alert("ERROR: You must enter at least something in Drink 1");
        }
        else {
            tempDrink1 = this.state.newDrink1.toLowerCase();
        }
        if (this.state.newDrink2 === "") {
            tempDrink2 = "empty"
        }
        else {
            tempDrink2 = this.state.newDrink2.toLowerCase();
        }
        if (this.state.newDrink3 === "") {
            tempDrink3 = "empty"
        }
        else {
            tempDrink3 = this.state.newDrink2.toLowerCase();
        }

        this.props.searchCocktailByDrinkFunc(tempDrink1, tempDrink2, tempDrink3)

        this.setState({
            newDrink1: "",
            newDrink2: "",
            newDrink3: "",
        });
    };


    render() {
        return (
            <section>
                    <div className="col-lg-1 d-none d-sm-block">
                        <i class="fas fa-cocktail fa-3x"></i>
                    </div>
                    <div className="col-12 col-lg-3">
                        <input
                            id="drink1Input"
                            type="text"
                            className="form-control"
                            placeholder="Drink 1"
                            value={this.state.newDrink1}
                            onChange={this.updateDrink1} />
                    </div>
                    <div className="col-12 col-lg-3">
                        <input
                            id="drink2Input"
                            type="text"
                            className="form-control"
                            placeholder="Drink 2"
                            value={this.state.newDrink2}
                            onChange={this.updateDrink2} />
                    </div>
                    <div className="col-12 col-lg-3">
                        <input
                            id="drink3Input"
                            type="text"
                            className="form-control"
                            placeholder="Drink 3"
                            value={this.state.newDrink3}
                            onChange={this.updateDrink3} />
                    </div>
                
                {/* <div className="row" > */}
                    {/* <div className="col-4 col-lg-5" /> */}
                    <div className="col-12 col-lg-2">
                        <button className="btn btn-success"
                            onClick={this.handleClick}>Search
                        </button>
                    </div>
                
                {/* </div> */}
            </section>
        );
    };
}

export default SearchByDrink;

