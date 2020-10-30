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
 
  clickfunction(tileObject) {
    for (let i = 0; i < 16; i++) {
      if (this.state.dataForTheTile[i].currentValue === 0)

      
      for (let j = 0; j < this.state.dataForTheTile[i].possibleMoves.length; j++) {
        console.log(this.state.dataForTheTile[i].possibleMoves, tileObject)
        
        
        if (this.state.dataForTheTile[i].possibleMoves[j] == tileObject) {
          console.log('hello')
          // this.setState({dataForTheTile[tileObject].currentValue : dataForTheTile[i].currentValue})
          //this.setState.dataForTheTile[tileObject]({currentValue :[i].currentValue})
          
          //  let tempArry = this.state.dataForTheTile[i].currentValue
          //  console.log(tempArry)
          //   this.setState({ tileObject: tempArry })
            

          

            // console.log(this.state.dataForTheTile[i].possibleMoves, tileObject)
            // console.log( this.state.dataForTheTile.possibleMoves.length)
          } else { console.log('goodbye') }

        }
    }
  }
  // let clicked_on_tile = tileObject

  //     if (clicked_on_tile.possibleMoves[i] = this.state.dataForTheTile.id) {

  //     }
  //   }
  //   }
  //  }
  //   //


  // console.log(clicked_on_tile.possibleMoves[i])
  // console.log(clicked_on_tile.currentValue)
  // console.log(clicked_on_tile.possibleMoves)
  // this.swapFunction()




  //function 
  //  that looks at the clicked on tiles [possibleMoves array]
  //    loop throughh the clicked_on_tile.possibleMoves.length


  // }

  //how to find the tile with the value 0
  // it would have to be close?
  // the current tile clicked on can on ly move to another tile if
  // the current valuse is the same as the posiiton
  //   check (if)the tile for tile with current value of 0 ?
  // if (clicked_on_tile.possibleMoves)




  //  loop through the whole obbject aray 

  //         if the tile that has a cuurent value of 0 check its id: 
  //            if that id is  one of the numbers in the clicked_on_tile.possibleMoves[]
  //        if the tile with a currentValue of 0 is within clicked_on_tile.possibleMoves[]
  //        

  //do I want to sawp this currentValue
  //current value = current position
  //thru array and determin if value at current value is id 
  //possiblr move array = 
  //is possible moves loop throu arrayon item 











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

