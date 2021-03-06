import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from "./Components/Board"




class App extends Component {
  constructor() {
    super();
    this.state = {
      dataForTheTile: [
        { 'id': 0, 'currentValue': 0, 'possibleMoves': [1, 4], 'currentRowX': 0, 'currentCloumY': 0, 'winPosition': [0, 0] },
        { 'id': 1, 'currentValue': 1, 'possibleMoves': [0, 2, 5], 'currentRowX': 1, 'currentCloumY': 0, 'winPosition': [1, 0] },
        { 'id': 2, 'currentValue': 2, 'possibleMoves': [1, 6, 3], 'currentRowX': 2, 'currentCloumY': 0, 'winPosition': [2, 0] },
        { 'id': 3, 'currentValue': 3, 'possibleMoves': [2, 7], 'currentRowX': 3, 'currentCloumY': 0, 'winPosition': [3, 0] },

        { 'id': 4, 'currentValue': 4, 'possibleMoves': [0, 5, 8], 'currentRowX': 0, 'currentCloumY': 1, 'winPosition': [0, 1] },
        { 'id': 5, 'currentValue': 5, 'possibleMoves': [1, 4, 6, 9], 'currentRowX': 1, 'currentCloumY': 1, 'winPosition': [1, 1] },
        { 'id': 6, 'currentValue': 6, 'possibleMoves': [2, 5, 10, 7], 'currentRowX': 2, 'currentCloumY': 1, 'winPosition': [2, 1] },
        { 'id': 7, 'currentValue': 7, 'possibleMoves': [3, 6, 11], 'currentRowX': 3, 'currentCloumY': 1, 'winPosition': [3, 1] },

        { 'id': 8, 'currentValue': 8, 'possibleMoves': [4, 9, 12], 'currentRowX': 0, 'currentCloumY': 2, 'winPosition': [0, 2] },
        { 'id': 9, 'currentValue': 9, 'possibleMoves': [5, 8, 10, 13], 'currentRowX': 1, 'currentCloumY': 2, 'winPosition': [1, 2] },
        { 'id': 10, 'currentValue': 10, 'possibleMoves': [6, 9, 14, 11], 'currentRowX': 2, 'currentCloumY': 2, 'winPosition': [2, 2] },
        { 'id': 11, 'currentValue': 11, 'possibleMoves': [7, 10, 15], 'currentRowX': 3, 'currentCloumY': 2, 'winPosition': [3, 2] },

        { 'id': 12, 'currentValue': 12, 'possibleMoves': [8, 13], 'currentRowX': 0, 'currentCloumY': 3, 'winPosition': [0, 3] },
        { 'id': 13, 'currentValue': 13, 'possibleMoves': [9, 12, 14], 'currentRowX': 1, 'currentCloumY': 3, 'winPosition': [1, 3] },
        { 'id': 14, 'currentValue': 14, 'possibleMoves': [10, 13, 15], 'currentRowX': 2, 'currentCloumY': 3, 'winPosition': [2, 3] },
        { 'id': 15, 'currentValue': 15, 'possibleMoves': [11, 14], 'currentRowX': 3, 'currentCloumY': 3, 'winPosition': [3, 3] }],
      Clicks: 0
    }
    this.clickfunction = this.clickfunction.bind(this)
  }

  clickfunction(tileID) {
    //start looping throught the whole array 
    for (let i = 0; i < 16; i++) {
      //evil tile is defined as what we wil later be looking for
      var evilTileValue = this.state.dataForTheTile[i].currentValue
      //confirming it is 0 
      if (evilTileValue === 0)

        //loop the array of possible moves of tile tha was clicked on
        for (let j = 0; j < this.state.dataForTheTile[tileID].possibleMoves.length; j++) {

          
          //posiblemvoes array  for the tile that was clicked on
          var posibleMoveID = this.state.dataForTheTile[tileID].possibleMoves[j];

          //what tile id has the currentVal of 0?
          //not looking for ONLY the current val but the corresponding id
          //current val signals where to check the id against the possible moves
          var currentMoveToCheck = this.state.dataForTheTile[i].id
          // console.log(currentMoveToCheck)

          //compare the //posiblemvoes array  for the tile that was clicked on
          if (posibleMoveID == currentMoveToCheck) {
            console.log('can switch')
            // create a new array with updated values
            let copy = this.state.dataForTheTile
            // console.log(this.state.dataForTheTile)
            let temp = 0
            temp = copy[tileID].currentValue
            copy[tileID].currentValue = copy[i].currentValue
            copy[i].currentValue = temp
            console.log(copy)
            this.setState({ dataForTheTile: copy })

          } else { console.log('can not switch') }

        }
    }
  }
  

  // console.log(clicked_on_tile.possibleMoves[i])
  // console.log(clicked_on_tile.currentValue)
  // console.log(clicked_on_tile.possibleMoves)
  // this.swapFunction()


  componentDidUpdate() {
    console.log("state was set", this.state.dataForTheTile);
  }



  render() {
    return (

      <div>

        <Header />
        <Board
          tile_Data_Raw={this.state.dataForTheTile}
          tile_click={this.clickfunction}
        />

      </div>

    );
  }
}



export default App;

