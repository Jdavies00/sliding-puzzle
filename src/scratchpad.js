// // import React, { Component } from 'react';

// // export default class scratchpad extends Component {
// //     constructor(){
// //         super();
// //         this.tile.name;
// //         this.title.postion;
// //         this.tile.isblank;
// //         this.title.winPostion;

// //         this.state={clicked:0
// //         }
// //         this.clickHandler = this.clickHnadler.bind(this)
// //     }
// // clickHndler(e){
// //     this.setState({clicked:this.state.clicked+1})
// //     }


// //     render() {
// //         return (
// //             <div>
// //             <Tile 
// //             id ={}
// //             isBlank= {this.tile.isBlank}
            
// //             />
                
// //             </div>
// //         )
// //      }
// // }
  

// import React, { Component } from 'react';
// import './App.css';
// import Header from './Components/Header';
// import 'bootstrap/dist/css/bootstrap.css';
// // import $ from 'jquery';
// // import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';




// class App extends Component {
//   constructor() {
//     super();
//     this.name = "Anthony";
//     this.age = '23';
//     this.clicked = 0;

//     this.state={thisclicked:0
//     }
//     this.clickHandler = this.clickHandler.bind(this)
// }
// clickHandler(e){
//   this.setState({clicked:this.state.clicked+1})
// }

//   render() {
//     return (
//       <div>
//         <Header
//           text={this.name}
//           age={this.age}
//           gardener
//           clicked = {this.state.clicked}
//           clickHandler= {this.clickHandler}
//         />
//         </div>
//     );

//   }
// }

//   export default App;
// //     App Layer Componet
// //   <div className="App-header">
// //     clicked:{this.setState.clicked}
// // <button 
// // type = "button"
// // className= "btn btn-primary"
// // onClick = {this.clickHandler}> clickme!</button>
// // </div>


// App Layer Componet
// //   <div className="App-header">
// //     clicked:{this.setState.clicked}
// // <button 
// // type = "button"
// // className= "btn btn-primary"
// // onClick = {this.clickHandler}> clickme!</button>
// // </div>
// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
        
// //       </div>
// //     )
// //   }
// // }



//     let arr = props.tileData.map((x, i) => i)
//     let grid = []
//     let subArr = []
//     for (let j = 0; j < arr.length; j++) {
//         let col = <div onClick = {props.clickHandler} className='col btn-primary' style={{ width: '150px' }}>{j}</div>
//         subArr.push(col)
//         if ((j + 1) % 4 === 0) {
//             console.log("in if")
//             let row = <div className='row' style={{ height: '150px' }}>{subArr}</div>
//             grid.push(row)
//             subArr = []
//         }
//     }
//     console.log(grid, subArr)


// return (

//     <div className='container'>
//         {grid}
//     </div>
// )

// export default Board;


// export default class Board extends Component {
//     constructor(props) {
//         super(props)

//         this.tileClick = this.tileClick.bind(this)
//     }
//     bindClick() {
//         console.log('hello')
//     }
// }

// render() {

//}

