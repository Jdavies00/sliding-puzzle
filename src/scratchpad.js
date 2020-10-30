// // // import React, { Component } from 'react';

// // // export default class scratchpad extends Component {
// // //     constructor(){
// // //         super();
// // //         this.tile.name;
// // //         this.title.postion;
// // //         this.tile.isblank;
// // //         this.title.winPostion;

// // //         this.state={clicked:0
// // //         }
// // //         this.clickHandler = this.clickHnadler.bind(this)
// // //     }
// // // clickHndler(e){
// // //     this.setState({clicked:this.state.clicked+1})
// // //     }


// // //     render() {
// // //         return (
// // //             <div>
// // //             <Tile 
// // //             id ={}
// // //             isBlank= {this.tile.isBlank}
            
// // //             />
                
// // //             </div>
// // //         )
// // //      }
// // // }
  

// // import React, { Component } from 'react';
// // import './App.css';
// // import Header from './Components/Header';
// // import 'bootstrap/dist/css/bootstrap.css';
// // // import $ from 'jquery';
// // // import Popper from 'popper.js';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import 'bootstrap/dist/css/bootstrap.min.css';




// // class App extends Component {
// //   constructor() {
// //     super();
// //     this.name = "Anthony";
// //     this.age = '23';
// //     this.clicked = 0;

// //     this.state={thisclicked:0
// //     }
// //     this.clickHandler = this.clickHandler.bind(this)
// // }
// // clickHandler(e){
// //   this.setState({clicked:this.state.clicked+1})
// // }

// //   render() {
// //     return (
// //       <div>
// //         <Header
// //           text={this.name}
// //           age={this.age}
// //           gardener
// //           clicked = {this.state.clicked}
// //           clickHandler= {this.clickHandler}
// //         />
// //         </div>
// //     );

// //   }
// // }

// //   export default App;
// // //     App Layer Componet
// // //   <div className="App-header">
// // //     clicked:{this.setState.clicked}
// // // <button 
// // // type = "button"
// // // className= "btn btn-primary"
// // // onClick = {this.clickHandler}> clickme!</button>
// // // </div>


// // App Layer Componet
// // //   <div className="App-header">
// // //     clicked:{this.setState.clicked}
// // // <button 
// // // type = "button"
// // // className= "btn btn-primary"
// // // onClick = {this.clickHandler}> clickme!</button>
// // // </div>
// // // import React, { Component } from 'react'

// // // export default class App extends Component {
// // //   render() {
// // //     return (
// // //       <div>
        
// // //       </div>
// // //     )
// // //   }
// // // }



// //     let arr = props.tileData.map((x, i) => i)
// //     let grid = []
// //     let subArr = []
// //     for (let j = 0; j < arr.length; j++) {
// //         let col = <div onClick = {props.clickHandler} className='col btn-primary' style={{ width: '150px' }}>{j}</div>
// //         subArr.push(col)
// //         if ((j + 1) % 4 === 0) {
// //             console.log("in if")
// //             let row = <div className='row' style={{ height: '150px' }}>{subArr}</div>
// //             grid.push(row)
// //             subArr = []
// //         }
// //     }
// //     console.log(grid, subArr)


// // return (

// //     <div className='container'>
// //         {grid}
// //     </div>
// // )

// // export default Board;


// // export default class Board extends Component {
// //     constructor(props) {
// //         super(props)

// //         this.tileClick = this.tileClick.bind(this)
// //     }
// //     bindClick() {
// //         console.log('hello')
// //     }
// // }

// // render() {

// //}




// // console.log(props)
// //   let arr = Array(16).fill().map((x, i) => i)
// //   console.log(arr)
  
// //   let grid = []
// //   let subArr = []
// //   for (let j = 0; j < arr.length; j++) {
    
// //         let col = <button  onClick = {() => alert('fuck')} key = {arr[j]}  className='col btn-primary' style={{ width: 150 }} >{j}</button>
// //         //fuck your keys
// //         subArr.push(col)
// //         if ((j + 1) % 4 === 0) {
// //             // console.log("in if")

// //             let row = <div className='row' style={{ height: 150 }}>{subArr}</div>
// //             grid.push(row)
// //             subArr = []
// //         }
// //     }
// //     console.log(grid, subArr)
// //     return (
// //         <div className='container'>
// //             {grid}
// //         </div>
// //     )
// // }




// import React, { Component } from 'react';
// import './App.css';
// import Header from './Components/Header';
// import 'bootstrap/dist/css/bootstrap.css';
// // import $ from 'jquery';
// // import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Board from "./Components/Board"




// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dataForTheTile: [
//         { 'id': 0, 'currentValue': 0, 'possibleMoves': [1, 4], 'currentRowX': 0, 'currentCloumY': 0, 'winPosition': [0, 0] },
//         { 'id': 1, 'currentValue': 1, 'possibleMoves': [0, 2, 5], 'currentRowX': 1, 'currentCloumY': 0, 'winPosition': [1, 0] },
//         { 'id': 2, 'currentValue': 2, 'possibleMoves': [1, 6, 3], 'currentRowX': 2, 'currentCloumY': 0, 'winPosition': [2, 0] },
//         { 'id': 3, 'currentValue': 3, 'possibleMoves': [2, 7], 'currentRowX': 3, 'currentCloumY': 0, 'winPosition': [3, 0] },

//         { 'id': 4, 'currentValue': 4, 'possibleMoves': [0, 5, 8], 'currentRowX': 0, 'currentCloumY': 1, 'winPosition': [0, 1] },
//         { 'id': 5, 'currentValue': 5, 'possibleMoves': [1, 4, 6, 9], 'currentRowX': 1, 'currentCloumY': 1, 'winPosition': [1, 1] },
//         { 'id': 6, 'currentValue': 6, 'possibleMoves': [2, 5, 10, 7], 'currentRowX': 2, 'currentCloumY': 1, 'winPosition': [2, 1] },
//         { 'id': 7, 'currentValue': 7, 'possibleMoves': [3, 6, 11], 'currentRowX': 3, 'currentCloumY': 1, 'winPosition': [3, 1] },

//         { 'id': 8, 'currentValue': 8, 'possibleMoves': [4, 9, 12], 'currentRowX': 0, 'currentCloumY': 2, 'winPosition': [0, 2] },
//         { 'id': 9, 'currentValue': 9, 'possibleMoves': [5, 8, 10, 13], 'currentRowX': 1, 'currentCloumY': 2, 'winPosition': [1, 2] },
//         { 'id': 10, 'currentValue': 10, 'possibleMoves': [6, 9, 14, 11], 'currentRowX': 2, 'currentCloumY': 2, 'winPosition': [2, 2] },
//         { 'id': 11, 'currentValue': 11, 'possibleMoves': [7, 10, 15], 'currentRowX': 3, 'currentCloumY': 2, 'winPosition': [3, 2] },

//         { 'id': 12, 'currentValue': 12, 'possibleMoves': [8, 13], 'currentRowX': 0, 'currentCloumY': 3, 'winPosition': [0, 3] },
//         { 'id': 13, 'currentValue': 13, 'possibleMoves': [9, 12, 14], 'currentRowX': 1, 'currentCloumY': 3, 'winPosition': [1, 3] },
//         { 'id': 14, 'currentValue': 14, 'possibleMoves': [10, 13, 15], 'currentRowX': 2, 'currentCloumY': 3, 'winPosition': [2, 3] },
//         { 'id': 15, 'currentValue': 15, 'possibleMoves': [11, 14], 'currentRowX': 3, 'currentCloumY': 3, 'winPosition': [3, 3] }],
//       Clicks: 0             //the possible moves are the only one  need to to check for because they are the only one that CAN move to them 
//     }
//     this.clickfunction = this.clickfunction.bind(this)
//   }
// find_0_value(){
//     this.state.dataForTheTile.findIndex(currentValue=0)
// }





//   clickfunction(tileObject) {
//     // let Click = this.state.Clicks
//     let clicked_on_tile = tileObject
    
//         if (clicked_on_tile.currentValue === tile with the 0 value possible moves array ){
//           console.log('hello ')
//         }
//         for (let i = 0; i < clicked_on_tile.possibleMoves.length; i++) {
        
      
//     console.log(clicked_on_tile)
//     console.log(clicked_on_tile.currentValue)
//     console.log(clicked_on_tile.possibleMoves)
// // this.swapFunction()
// }
//  .filter the whole thing to find current value 0 
//     once the current value 0 is found 
//         assingit a value to hold it 
//         search through
    
//     grab that pssoble move array 
//     compare that possibe move aray to the clicked on tile id




// //function 
//     //  that looks at the clicked on tiles [possibleMoves array]
//     //    loop throughh the clicked_on_tile.possibleMoves.length
      
    
//     // }
  
//     //how to find the tile with the value 0
//     // it would have to be close?
//     // the current tile clicked on can on ly move to another tile if
//         // the current valuse is the same as the posiiton
//     //   check (if)the tile for tile with current value of 0 ?
//     // if (clicked_on_tile.possibleMoves)


  

//   //  loop through the whole obbject aray 

// //         if the tile that has a cuurent value of 0 check its id: 
// //            if that id is  one of the numbers in the clicked_on_tile.possibleMoves[]
// //        if the tile with a currentValue of 0 is within clicked_on_tile.possibleMoves[]
// //        

// //do I want to sawp this currentValue
// //current value = current position
// //thru array and determin if value at current value is id 
// //possiblr move array = 
// //is possible moves loop throu arrayon item 

















//       render() {
//         return (

//           <div>

//             <Header />
//             <Board
//               tile_Data_Raw={this.state.dataForTheTile}
//               tile_click={this.clickfunction}
//             />

//           </div>

//         );
//       }
//     }



//     export default App;

