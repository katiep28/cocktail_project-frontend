import React from 'react';


class SearchResults extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedCocktail: ""
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    };

    handleDropdownChange(e) {

        this.setState({ selectedCocktail: e.target.value });
        this.props.showRecipeFunc(e.target.value, "");
    }

    render() {
        return (
            // <section>
            //     <div className="col-sm-12 col-lg-6"></div>
            //     <div className="col-sm-12 col-lg-6"></div>

                <div className="form-group">
                    <label for="SearchResults">Search Results</label>
                    <select multiple className="form-control" id="SearchResults"
                        onChange={this.handleDropdownChange}>
                        {this.props.cocktailArray.map(item => {
                            return <option key={item.id} value={item.name}> {item.name} </option>
                        })}
                    </select>
                </div>
            // </section>
        );
    }
}

export default SearchResults;