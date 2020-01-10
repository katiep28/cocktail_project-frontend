import React from 'react';
// import { findAllInRenderedTree } from 'react-dom/test-utils';

class SearchCocktailByName extends React.Component {
    state = {
        drinkName: ""
    }

    getCocktail = (event) => {
        if (this.state.drinkName === "") {
            alert("ERROR: You must enter a cocktail name to search on");
        }
        this.props.searchCocktailFunc(this.state.drinkName.toLowerCase());
        
        this.setState({ drinkName: ""});
    }
    updateName = (event) => {
        this.setState({ drinkName: event.target.value })
    }
    render() {
        return (
            <div> 
            {/* <div className="row"> */}
                <div className="col-8 col-md-8" >
                    <input
                        id="input-group"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search Cocktail..." style={{ height: "40px" }}
                        value={this.state.drinkName}
                        onChange={this.updateName} />
                </div>

                <div className="col-4 col-md-4">
                    <button type="button"
                        style={{ height: "40px" }}
                        className="btn btn-success"
                        onClick={this.getCocktail}>
                        Search
                    </button>
                </div>
            {/* </div> */}
        </div>
        );
    }
}




export default SearchCocktailByName;