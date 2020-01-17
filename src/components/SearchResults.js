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
            
            <div>
                 {/* <div className="form-group">  */}
                    <label for="SearchResults">Search Results</label>
                    <select multiple className="form-control" id="SearchResults"
                        onChange={this.handleDropdownChange}>
                        {this.props.cocktailArray.map(item => {
                            return <option key={item.id} value={item.name}> {item.name} </option>
                        })}
                    </select>
                </div>
        );
    }
}

export default SearchResults;