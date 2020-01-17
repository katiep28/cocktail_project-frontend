import React, { Component, Fragment } from 'react';
// import photo2 from './images/cocktail_skulls.jpg';
import photo2 from './images/cocktail_skulls_thin.jpg';
import photo7 from './images/cocktail_trio_thin.jpg';

import SearchCocktailByName from './components/SearchCocktailByName';
import DropDown from './components/DropDown';
import SearchByDrink from './components/SearchByDrink';
import SearchResults from './components/SearchResults';
import DisplayPopup from './components/DisplayPopup';

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

const axios = require('axios');

class App extends React.Component {

  state = {
    cocktailDetails: [],
    cocktailList: [],
    cocktailByDrink: [],
    cocktailRecipe: "",
    cocktailName: "",
    cocktalImage:"",
    display: false
  }

  componentDidMount() {
    //Make async request to get data
    console.log("in componant did mount");
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  searchCocktailByName = (cocktailName) => {
    // axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktailbyname/' + cocktailName)
    //   .then((response) => {

    //     this.setState({
    //       cocktailDetails: response.data.cocktails
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    let found = false;

    this.state.cocktailList.map(item => {
      if (cocktailName === item.name.toLowerCase()) {
        this.showRecipe(item.name, item.recipe);
        found = true;
      }
    })
    if (!found) {

      alert("ERROR: No cocktail by this name has been found");
    }
  }

  searchCocktailByDrink = (drink1, drink2, drink3) => {
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktaildrink/' + drink1 + "/" + drink2 + "/" + drink3)
      .then((response) => {

        console.log(response.data.cocktails);

        this.setState({
          cocktailByDrink: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  getAllCocktails = () => {
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        console.log(response.data);
        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  showRecipe = (cocktailName, recipe) => {
    let tempRecipe = "";
    let tempImage = "";

    // if (recipe !== "") {
    //   tempRecipe = recipe;
    // }
    // else {
      tempRecipe = this.state.cocktailList.map(item => {
        if (item.name === cocktailName) {
          tempImage = item.thumbnail;
          return item.recipe;
        };
      })
    // }
    this.setState({
      cocktailRecipe: tempRecipe,
      cocktailName: cocktailName,
      cocktailImage: tempImage,
      display: true
    })
    recipe = "";
  }

  resetVariables = () => {
    this.setState({
      cocktailRecipe: "",
      cocktailName: "",
      display: false
    })
  }

  render() {

    const alcoholicCocktails = this.state.cocktailList.filter(item => item.alcoholic);
    const nonAlcoholicCocktails = this.state.cocktailList.filter(item => !item.alcoholic);

    return (
      <Fragment>
        <div className="jumbotron">
          <div className="container-bg-sm" >
            <Header />
          </div>
          <Footer />
        </div>

        <div className="container-fluid text-block">
          <span className="overlay-text maintxt2 alternate-font text-blue">WHAT WOULD YOU LIKE?</span>
          <br />
        </div>


        <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
          <div className="container">
            <div className="row">

              <div className="col-sm-12 col-md-5 text-center text-md-left text-uppercase mb-3 mb-md-0">
                {/* <div className="row"> */}
                <SearchCocktailByName
                  searchCocktailFunc={this.searchCocktailByName}
                  showRecipeFunc={this.showRecipe}
                  key="0" />

              </div>

              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">

                <DropDown
                  cocktailArray={alcoholicCocktails}
                  label="Alcoholic" style={{ width: "160px" }}
                  showRecipeFunc={this.showRecipe}
                  key="2"
                />

              </div>

              <div className="col-sm-12 col-md-3 text-center text-md-left text-uppercase mb-3 mb-md-0">

                <DropDown
                  cocktailArray={nonAlcoholicCocktails}
                  label="Non-Alcoholic" style={{ width: "160px" }}
                  showRecipeFunc={this.showRecipe}
                  key="3"
                />
              </div>

            </div>
          </div>
        </div>


        <div className="container-fluid text-block">
          <img className="img-responsive1" src={photo7} width="1450" alt="" />
          <br />
        </div>

        <div className="container-fluid text-block">
          <span className="overlay-text maintxt2 alternate-font text-blue" >MAKE ME ONE!</span>
          <br />
        </div>


        <div className="feature-wrapper bg-white pt-5 pb-5 mt-5 mt-lg-0">
          <div className="container">
            <div className="row">
              <section>
                <div className="col-sm-12 col-lg-9">
                  <SearchByDrink
                    searchCocktailByDrinkFunc={this.searchCocktailByDrink}
                    key="3" />
                </div>

                <div className="col-sm-12 col-lg-3">
                  <SearchResults
                    cocktailArray={this.state.cocktailByDrink}
                    label="Click to see Cocktails"
                    showRecipeFunc={this.showRecipe}
                    key="4"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 text-center text-md-center text-uppercase mb-3 mb-md-0">

          <DisplayPopup
            cocktailName={this.state.cocktailName}
            recipe={this.state.cocktailRecipe}
            image={this.state.cocktailImage}
            display={this.state.display}
            resetVariablesFunc={this.resetVariables}
            key="7"
          />

        </div>

        <div className="container-fluid">
          {/* <img img className="img-responsive" src={photo2} width="1450" height="100" alt="" /> */}

          <img img className="img-responsive1" src={photo2} width="1450" alt=""/>
        </div>
      </Fragment>
    );
  }

}
export default App;


